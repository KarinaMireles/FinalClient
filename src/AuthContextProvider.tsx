import { ReactNode, useEffect, useState, FC } from "react"
import { User } from "firebase/auth"
import { auth } from "./firebaseConfig"
import AuthContext from "./AuthContext"

interface Props {
	children: ReactNode
}
const AuthContextProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		auth.onAuthStateChanged(newUser => setUser(newUser))
	}, [])

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthContextProvider
