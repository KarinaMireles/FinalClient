import { UserProfile } from "./models/Profile";
import { User } from "firebase/auth";
import { createContext } from "react";

export interface AuthContextModel {
  user: User | null;
  userProfile: UserProfile;
  updateUserProfile: (profile: UserProfile) => void;
}

const defaultValue: AuthContextModel = {
  user: null,
  userProfile: {
    id: "abc_123",
    profilePhoto:
      "https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg", // Replace with an actual URL or null
    username: "Jake",
    age: 27, // or null if age is not known
    location: "Grand Rapids, MI", // or null
    bio: "Hard bass, soft piano",
    email: "", // Replace with actual email or null
    musicGenres: ["Techno", "Jazz"], // or null if not known}}
  },
  updateUserProfile: (profile: UserProfile) => {},
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
