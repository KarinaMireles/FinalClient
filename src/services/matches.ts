import { UserProfile } from "../models/Profile";
import { auth } from "../firebaseConfig";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const getToken = async (): Promise<string> => {
  if (!auth.currentUser) throw new Error();
  return await auth.currentUser.getIdToken(true);
};
// this is just a getUsers call
//need to update to return Matches
export const getMatches = async (): Promise<UserProfile[]> => {
  const users = await axios.get(baseUrl + "/user", {});
  console.log(
    " get users return data ----------------------------",
    users.data
  );
  return users.data;
};
