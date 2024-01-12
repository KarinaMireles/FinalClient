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
import { useContext, useEffect, useState } from "react";
import { UserProfile } from "./models/Profile";
import {
  getUsers,
  putUser,
  updateUserProfileBackend,
} from "../src/services/services";
import AuthContext from "./AuthContext";
import Login from "./Login";

function App() {
  const [likedMatches, setLikedMatches] = useState<string[]>([]);
  const [dislikedMatches, setDislikedMatches] = useState<string[]>([]);
  const { userProfile, updateUserProfile } = useContext(AuthContext);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    if (!userProfile.id) return;
    getUsers(userProfile.id).then((users) => {
      setProfiles(users);
    });
      setLikedMatches(userProfile?.likedUsers || []);
    setDislikedMatches(userProfile?.dislikedUsers || []);

  }, [userProfile.id]);

  const addLikedMatch = (id: string = "") => {
    setLikedMatches((prev) => [...prev, id]);
    const likedProfile = profiles?.find((profile) => profile.id === id);
    if (likedProfile) {
      updateUserProfileBackend({
        ...userProfile,
        likedUsers: [...likedMatches, id],
      });
      updateUserProfile({ ...userProfile, likedUsers: [...likedMatches, id] });
      const newProfiles = profiles.filter((profile) => profile.id !== id);
      setProfiles(newProfiles);
    }
  };

  const addDislikedMatch = (id: string = "") => {
    setDislikedMatches((prev) => [...prev, id]);
    const dislikedProfile = profiles.find((profile) => profile.id === id);
    if (dislikedProfile) {
      const newProfiles = profiles.filter((profile) => profile.id !== id);
      setProfiles(newProfiles);
    }
  };

  // const mockUserProfile: UserProfile = {
  //   id: "abc_123",
  //   profilePhoto:
  //     "https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg", // Replace with an actual URL or null
  //   displayName: "Jake",
  //   age: 27, // or null if age is not known
  //   location: "Grand Rapids, MI", // or null
  //   bio: "Hard bass, soft piano",
  //   email: "", // Replace with actual email or null
  //   musicGenres: ["Techno", "Jazz"], // or null if not known
  // };

  return (
    <div className="App">
      <Router>
        <Header />

        <div className="App__content">
          <BottomMenu />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleLike={addLikedMatch}
                  handleDislike={addDislikedMatch}
                  profiles={profiles}
                />
              }
            />
            <Route
              path="/matches"
              element={
                <Matches
                  handleDislike={addDislikedMatch}
                  handleLike={addLikedMatch}
                />
              }
            />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <Profile
                  onMatches={false}
                  profile={userProfile}
                  onLike={addLikedMatch}
                  onDislike={addDislikedMatch}
                />
              }
            />
            <Route path="/profile/edit" element={<ProfileEditForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
