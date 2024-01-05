import { signInWithCustomToken } from "firebase/auth"
import { auth } from "./firebaseConfig"
import AuthContext from "./AuthContext"
import { useNavigate, useSearchParams } from "react-router-dom"
import React, { useContext, useEffect} from "react"
import axios from "axios"

const Login = () => {
	const navigate = useNavigate()
	const { updateUserProfile } = useContext(AuthContext);
	const [searchParams, setSearchParams] = useSearchParams();
	
	useEffect(() => {
		const token = searchParams.get("token")
		const id = searchParams.get("id")
		if (token === null) return navigate("/")
		signInWithCustomToken(auth, token).then(async (userCredential) => {
			const userProfile = (await axios.get(import.meta.env.VITE_API_URL + "/user/" + id)).data
			updateUserProfile(userProfile)
			navigate("/profile/edit")
		})
	}, [navigate, searchParams, updateUserProfile])
	
	return <></>
}
export default Login
