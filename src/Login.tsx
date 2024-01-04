import { signInWithGoogle, signOut } from "./firebaseConfig"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const navigate = useNavigate()
	const loginAndRedirect = async () => {
		await signInWithGoogle()
		navigate("/app")
	}
	return (
		<>
			<h3>Login</h3>
			<button onClick={loginAndRedirect}>Login w/ Google</button>
			<button onClick={signOut}>Logout</button>
		</>
	)
}
export default Login
