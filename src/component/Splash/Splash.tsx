// import "./Splash.css";
const Splash = () => {
  const handleLogin = () => {
    const loginUrl = "http://127.0.0.1:5001/final-project-e9adb/us-central1/api/login";
    window.location.href = loginUrl;
  };
  return (
    <div className="Splash">
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
export default Splash;
