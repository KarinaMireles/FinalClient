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
import { useContext, useState } from "react";
import { UserProfile } from "./models/Profile";
import { getUsers } from "./services";
import PFP from "./assets/PFP.jpg";
import AuthContext from "./AuthContext";
import Login from "./Login";

function App() {
  const [likedMatches, setLikedMatches] = useState<string[]>([]);
  const [dislikedMatches, setDislikedMatches] = useState<string[]>([]);
  const { userProfile } = useContext(AuthContext);
  const [profiles, setProfiles] = useState<UserProfile[]>([
    {
      profilePhoto:
        "https://th.bing.com/th/id/OIP.BHhOApKVqIj0KDfCRxmLJgHaE8?rs=1&pid=ImgDetMain",
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
    {
      profilePhoto:
        "https://www.edmsauce.com/wp-content/uploads/2022/08/What-is-a-Wook-scaled.jpg",
      username: "Sam",
      musicGenres: ["Electronic", "EDM"],
      age: 35,
      location: "KNoxville, TN",
      bio: "Looking for my forever girl to go to EF with",
      email: "Sam22@gmail.com",
      id: "3",
    },
    {
      profilePhoto:
        "https://th.bing.com/th/id/OIP._559T7lVnEmi55N5ErmtVAHaLV?rs=1&pid=ImgDetMain",
      username: "Sarah",
      musicGenres: ["Pop", "Dance"],
      age: 32,
      location: "Lansing, MI",
      bio: "Looking for friends to dance with",
      email: "Sarah123456@gmail.com",
      id: "4",
    },
    {
      profilePhoto:
        "https://i.pinimg.com/originals/59/b1/6b/59b16b46ff76abddaab6d5fd1a8546d3.jpg",
      username: "Patrick",
      musicGenres: ["House", "Metal"],
      age: 27,
      location: "Austin, TX",
      bio: "Looking for friends to dance with",
      email: "Patrick@gmail.com",
      id: "5",
    },
    {
      profilePhoto:
        "https://th.bing.com/th/id/R.52b521e8664bfa34996daab6feb3e3e0?rik=piSbVMAdFWZYWQ&pid=ImgRaw&r=0",
      username: "Sierra",
      musicGenres: ["Classical", "Baroque"],
      age: 29,
      location: "Los Angeles, CA",
      bio: "Looking for girls to go to the symphony with",
      email: "Sierra222@gmail.com",
      id: "6",
    },
    // ... other profiles
  ]);
  const [myMatches, setMyMatches] = useState<UserProfile[]>([]);

  const addLikedMatch = (id: string = "") => {
    setLikedMatches((prev) => [...prev, id]);
    const likedProfile = profiles.find((profile) => profile.id === id);
    if (likedProfile) {
      setMyMatches((prev) => [...prev, likedProfile]);
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
  //   username: "Jake",
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
                profiles={myMatches}
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
                profile={userProfile}
                onLike={addLikedMatch}
                onDislike={addDislikedMatch}
              />
            }
          />
          <Route path="/profile/edit" element={<ProfileEditForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
