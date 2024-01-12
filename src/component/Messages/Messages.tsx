import { useEffect, useState } from "react";
import { UserProfile } from "../../models/Profile";
import { getMatches } from "../../services/matches";

const Messages = () => {
  const [myMatches, setMyMatches] = useState<UserProfile[]>([]);
  useEffect(() => {
    getMatches().then((users) => {
      setMyMatches(users); //need to update getMatches call to return matches
    });
  }, []);
  return (
    <div>
      {myMatches.map((match) => (
        <div>{match.displayName}</div>
      ))}
    </div>
  );
};
export default Messages;
