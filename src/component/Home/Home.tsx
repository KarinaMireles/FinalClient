import { FC, useState } from "react";
import HomeScroll from "./HomeScroll";
import { UserProfile } from "../../models/Profile";
import Profile from "../Profile/Profile";
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
  const [notesClass, setNotesClass] = useState("notes")
  const likePerson = async (id: string) => {
    setTimeout(() => {
      setNotesClass("notes")
      handleLike(id)
    }, 800) 
  }

  return (
    <div className="home">
      {profiles.length > 0 ? (
        <Profile
          onMatches={false}
          onDislike={handleDislike}
          onLike={(id) => {
            setNotesClass("notes-active")
            likePerson(id) 
          }}
          profile={profiles[0]}
        />
      ) : (
        <p>No more profiles to view.</p>
      )}
      <div className={notesClass}>
        <div className="note">♪</div>
        <div className="note">♫</div>
        <div className="note">♬</div>
      </div>
      {/* {profiles.length > 0 ? (
        <HomeScroll
          profiles={profiles}
          onDislike={handleDislike}
          onLike={handleLike}
        />
      ) : (
        <p>No more profiles.</p>
      )} */}
    </div>
  );
};

export default Home;
