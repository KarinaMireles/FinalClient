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
  profilePhoto: string | null;
  musicGenres: string[] | null;
  location: string | null;
  id: string;
  likedUsers: string[];
  dislikedUsers: string[];
}
