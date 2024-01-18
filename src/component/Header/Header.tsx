import "./Header.css";
import AuthContext from "../../AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="header">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <h1>Soul Symphony</h1>
    </div>
  );
};
export default Header;
