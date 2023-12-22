import { useState } from "react";
import HomeScroll from "./HomeScroll";
export interface Profile {
  profilePhoto: string;
  userName: string;
  musicGenres: string[];
  age: number;
  location: string;
  bio: string;
}
const Home = () => {
  const [profiles, setProfiles] = useState([
    {
      profilePhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixC6Dmj2lazabaG8VtRRGkXoLLVwDCj70tfJtssV81g&s",
      userName: "Big Daddy",
      musicGenres: ["country", "Christian"],
      age: 25,
      location: "Nashville, TN",
      bio: "I'm a big daddy looking for a big momma",
    },
    {
      profilePhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixC6Dmj2lazabaG8VtRRGkXoLLVwDCj70tfJtssV81g&s",
      userName: "Music Snob",
      musicGenres: ["country", "Christian"],
      age: 25,
      location: "Nashville, TN",
      bio: "I'm a big daddy looking for a big momma",
    },
    {
      profilePhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixC6Dmj2lazabaG8VtRRGkXoLLVwDCj70tfJtssV81g&s",
      userName: "Music Snob",
      musicGenres: ["country", "Christian"],
      age: 25,
      location: "Nashville, TN",
      bio: "I'm a big daddy looking for a big momma",
    },
  ]);
  return <HomeScroll profiles={profiles} />;
};
export default Home;
