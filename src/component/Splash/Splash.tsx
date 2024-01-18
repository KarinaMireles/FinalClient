import "./Splash.css";

const Splash = () => {
  const handleLogin = () => {
    const loginUrl = "http://127.0.0.1:5001/final-project-e9adb/us-central1/api/login"
    window.location.href = loginUrl
  }

  return (
    <div className="Splash">
      <div className="form-container">
        <div className="bar-container">
          <div className="bar" id="bar1"></div>
          <div className="bar" id="bar2"></div>
          <div className="bar"></div>
          <div className="bar" id="bar4"></div>
          <div className="bar" id="bar5"></div>
        </div>
        <p>Find your perfect match for the music you love</p>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Splash;
