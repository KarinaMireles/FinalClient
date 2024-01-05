import { FC } from "react";
import { UserProfile } from "../../models/Profile";
import Profile from "../Profile/Profile";
// import HomeScroll from "../Home/HomeScroll";

interface MatchesProps {
  profiles: UserProfile[];
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
}

const Matches: FC<MatchesProps> = ({ profiles, handleDislike, handleLike }) => {
  return (
    <div>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <Profile
            profile={profile}
            onDislike={handleDislike}
            onLike={handleLike}
            onMatches={true}
          />
        ))
      ) : (
        // // <HomeScroll
        //   profiles={profiles}
        //   onDislike={handleDislike}
        //   onLike={handleLike}
        // />
        <p>No profiles shown.</p>
      )}
    </div>
  );
};
export default Matches;
