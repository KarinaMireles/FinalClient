export interface UserProfile {
  username: string;
  email: string;
  bio: string;
  age: number | null;
  profilePhoto: string | null;
  musicGenres: string[] | null;
  location: string | null;
  id: string;
}
