import { ReactNode, useEffect, useState, FC } from "react";
import { User } from "firebase/auth";
import { auth } from "./firebaseConfig";
import AuthContext from "./AuthContext";
import { UserProfile } from "./models/Profile";

interface Props {
  children: ReactNode;
}
const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: "abc_123",
    profilePhoto:
      "https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg", // Replace with an actual URL or null
    username: "Jake",
    age: 27, // or null if age is not known
    location: "Grand Rapids, MI", // or null
    bio: "Hard bass, soft piano",
    email: "", // Replace with actual email or null
    musicGenres: ["Techno", "Jazz"],
  });
  const updateUserProfile = (profile: UserProfile) => {
    setUserProfile({ ...userProfile, ...profile });
    console.log(profile)
  };
  useEffect(() => {
    auth.onAuthStateChanged((newUser) => setUser(newUser));
  }, []);

  return (
    <AuthContext.Provider value={{ user, userProfile, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
