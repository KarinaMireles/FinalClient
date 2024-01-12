import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./BottomMenu.css";
const BottomMenu = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="bottom-menu">
      <div className="bottom-menu__item">
        <Link to="/home">Home</Link>
      </div>
      <div className="bottom-menu__item">
        <Link to="/matches">
          <span>Matches</span>
        </Link>
      </div>
      <div className="bottom-menu__item">
        <Link to="/messages">
          <span>Messages</span>
        </Link>
      </div>
      <div className="bottom-menu__item">
        <Link to="/profile">
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};
export default BottomMenu;
