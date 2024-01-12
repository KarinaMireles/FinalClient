import { ReactNode, useEffect, useState, FC } from "react";
import { User } from "firebase/auth";
import { auth } from "./firebaseConfig";
import AuthContext from "./AuthContext";
import { UserProfile } from "./models/Profile";

interface Props {
  children: ReactNode;
}

const defaultUser = {
  displayName: "",
  email: "",
  bio: "",
  dob: "",
  gender: "",
  genderPreference: "",
  topArtists: [],
  age: null,
  status: "",
  profilePhoto: "",
  musicGenres: [],
  location: "",
  id: "",
  likedUsers: [],
  dislikedUsers: [],
};

const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>(defaultUser);
  const updateUserProfile = (profile: UserProfile) => {
    setUserProfile({ ...userProfile, ...profile });
    console.log(profile);
  };
  useEffect(() => {
    auth.onAuthStateChanged((newUser) => setUser(newUser));
  }, []);
  const logout = () => {
    updateUserProfile(defaultUser);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, userProfile, updateUserProfile, logout }}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
