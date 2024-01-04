import { FC, useState } from "react";
import HomeScroll from "./HomeScroll";
import { UserProfile } from "../../models/Profile";
interface HomeProps {
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
  profiles: UserProfile[];
}

const Home: FC<HomeProps> = ({ handleDislike, handleLike, profiles }) => {
  // const handleDislike = (index: number) => {
  //   // Removing the disliked profile from the array
  //   setProfiles((prev) => prev.filter((_, i) => i !== index));
  // };

  // const handleLike = (index: number) => {
  //   // For now, just remove the profile, but you could add different logic
  //   setProfiles((prev) => prev.filter((_, i) => i !== index));
  // };

  return (
    <div>
      {profiles.length > 0 ? (
        <HomeScroll
          profiles={profiles}
          onDislike={handleDislike}
          onLike={handleLike}
        />
      ) : (
        <p>No more profiles.</p>
      )}
    </div>
  );
};

export default Home;
