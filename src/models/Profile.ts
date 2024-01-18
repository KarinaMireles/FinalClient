export interface UserProfile {
  displayName: string;
  email: string;
  bio: string;
  dob: string;
  gender: string;
  genderPreference: string;
  topArtists: { name: string; genres: string[] }[];
  age: number | null;
  status: string | null;
  profilePictures: string[];
  musicGenres: string[] | null;
  location: string;
  id: string;
  likedUsers: string[];
  dislikedUsers: string[];
}
