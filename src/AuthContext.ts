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
  },
  updateUserProfile: (profile: UserProfile) => {},
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
