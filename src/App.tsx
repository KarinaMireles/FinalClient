import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import BottomMenu from "./component/BottomMenu/BottomMenu";
import Home from "./component/Home/Home";
import Matches from "./component/Matches/Matches";
import Messages from "./component/Messages/Messages";
import Profile from "./component/Profile/Profile";
import Header from "./component/Header/Header";
import ProfileEditForm from "./component/Profile/ProfileEditForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <BottomMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEditForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
