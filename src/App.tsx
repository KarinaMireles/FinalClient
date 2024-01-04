import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BottomMenu from "./component/BottomMenu/BottomMenu";
import Home from "./component/Home/Home";
import Matches from "./component/Matches/Matches";
import Messages from "./component/Messages/Messages";
import Profile from "./component/Profile/Profile";
import Header from "./component/Header/Header";
import ProfileEditForm from "./component/Profile/ProfileEditForm";
import { useState } from "react";
import { UserProfile } from "./models/Profile";
import { getUsers } from "./services";
import PFP from "./assets/PFP.jpg";

function App() {
  const [likedMatches, setLikedMatches] = useState<string[]>([]);
  const [dislikedMatches, setDislikedMatches] = useState<string[]>([]);
  const [profiles, setProfiles] = useState<UserProfile[]>([
    {
      profilePhoto: "https://th.bing.com/th/id/OIP.BHhOApKVqIj0KDfCRxmLJgHaE8?rs=1&pid=ImgDetMain",
      username: "Big Daddy",
      musicGenres: ["country", "Christian"],
      age: 25,
      location: "Nashville, TN",
      bio: "I'm a big daddy looking for a big momma",
      email: "bigdaddy@gmail.com",
      id: "1",
    },
    {
      profilePhoto:
        "https://th.bing.com/th/id/R.6b0654f78130f63f1cd66100e787c6a3?rik=MT5NjQUVw%2fg7mA&riu=http%3a%2f%2fmymodernmet.com%2fwp%2fwp-content%2fuploads%2f2017%2f04%2fredheads-brian-dowling-10.jpg&ehk=pi3XKq3lAOuqvBIWDmAgrkjEqHGi9dkoiNHhjSqTGe0%3d&risl=&pid=ImgRaw&r=0",
      username: "Kat",
      musicGenres: ["Electro", "Techno"],
      age: 28,
      location: "Detroit, MI",
      bio: "Looking for someone to go to raves with",
      email: "KatS28@gmail.com",
      id: "2",
    },
    // ... other profiles
  ]);
  const [myMatches, setMyMatches] = useState<UserProfile[]>([]);

  const addLikedMatch = (id: string) => {
    setLikedMatches((prev) => [...prev, id]);
    const likedProfile = profiles.find((profile) => profile.id === id);
    if (likedProfile) {
      setMyMatches((prev) => [...prev, likedProfile]);
      const newProfiles = profiles.filter((profile) => profile.id !== id);
      setProfiles(newProfiles);
    }
  };

  const addDislikedMatch = (id: string) => {
    setDislikedMatches((prev) => [...prev, id]);
    const dislikedProfile = profiles.find((profile) => profile.id === id);
    if (dislikedProfile) {
      const newProfiles = profiles.filter((profile) => profile.id !== id);
      setProfiles(newProfiles);
    }
  };

  const mockUserProfile: UserProfile = {
    id: "abc_123",
    profilePhoto: "https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg", // Replace with an actual URL or null
    username: "Jake",
    age: 27, // or null if age is not known
    location: "Grand Rapids, MI", // or null
    bio: "Hard bass, soft piano",
    email: "", // Replace with actual email or null
    musicGenres: ["Techno", "Jazz"], // or null if not known
  };

  return (
    <div className="App">
      <Router>
        <Header />

        <BottomMenu />
        <Routes>
          <Route
            path="/"
            element={<Home handleLike={addLikedMatch} handleDislike={addDislikedMatch} profiles={profiles} />}
          />
          <Route
            path="/matches"
            element={<Matches profiles={myMatches} handleDislike={addDislikedMatch} handleLike={addLikedMatch} />}
          />
          <Route path="/messages" element={<Messages />} />
          <Route
            path="/profile"
            element={<Profile profile={mockUserProfile} onLike={addLikedMatch} onDislike={addDislikedMatch} />}
          />
          <Route path="/profile/edit" element={<ProfileEditForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
