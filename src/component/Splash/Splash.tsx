import "./Splash.css";
import soulSymphonyLogo from './soul-symphony-2.png'

const Splash = () => {
  const handleLogin = () => {
    const loginUrl = "http://127.0.0.1:5001/final-project-e9adb/us-central1/api/login"
    window.location.href = loginUrl
  }

  return (
    <div className="Splash">
      <div className="form-container">
        <img src={soulSymphonyLogo} alt="Soul Symphony Logo" className="logo"/>
        <p>Find your perfect match for the music you love</p>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Splash;
