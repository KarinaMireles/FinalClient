import { FC, useContext, useEffect, useState } from "react";
import { UserProfile } from "../../models/Profile";
import Profile from "../Profile/Profile";
// import HomeScroll from "../Home/HomeScroll";
import { Link } from "react-router-dom";
import { getMatches } from "../../services/matches";
import AuthContext from "../../AuthContext";
interface MatchesProps {
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
}

const Matches: FC<MatchesProps> = ({ handleDislike, handleLike }) => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const { userProfile } = useContext(AuthContext);
  useEffect(() => {
    getMatches(userProfile.id).then((profiles) => setProfiles(profiles));
  }, []);
  return (
    <div>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <div key={profile.id}>
            <Profile
              profile={profile}
              onDislike={handleDislike}
              onLike={handleLike}
              onMatches={true}
            />
            <Link to={`/messages/${profile.id}`} className="message-button">
              Message
            </Link>
          </div>
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
