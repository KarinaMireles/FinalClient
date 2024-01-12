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
export const getMatches = async (id: string): Promise<UserProfile[]> => {
  const user = await axios.get(baseUrl + "/user/" + id, {});
  console.log(" get users return data ----------------------------", user.data);
  const matchesIds = user.data.likedUsers;
  const allUsers = await axios.get(baseUrl + "/user", {});
  const matches = matchesIds.map((id: string) => {
    return allUsers.data.find((user: UserProfile) => user.id === id);
  });
  return matches;
};
