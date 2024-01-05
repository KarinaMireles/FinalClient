import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserProfile } from "../../models/Profile";
import { FC, useContext } from "react";
import AuthContext from "../../AuthContext";
import "../Home/HomeScroll.css";
interface ProfileProps {
  profile: UserProfile;
  onDislike: (id: string) => void;
  onLike: (id: string) => void;
  onMatches: boolean;
}
const Profile: FC<ProfileProps> = ({
  profile,
  onLike,
  onDislike,
  onMatches = false,
}) => {
  const { userProfile } = useContext(AuthContext);
  const onUserProfilePage = userProfile?.id === profile?.id;
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/profile/edit");
  };
  return (
    <div>
      <div className="slider">
        <img
          className="sliderimage"
          src={(profile && profile.profilePhoto) || ""}
          alt={`${profile && profile.username}`}
        />
        <div className="slider__text">
          <div>{profile && profile.username}</div>
          <div>{profile && profile.age}</div>
          <div>{profile && profile.location}</div>
          <div>{profile && profile.bio}</div>
        </div>
        {onMatches === false && onUserProfilePage === false && (
          <div className="slider__buttons">
            <button onClick={() => onDislike(profile.id)}>Dislike (X)</button>
            <button onClick={() => onLike(profile.id)}>Like (♥)</button>
          </div>
        )}
        {userProfile?.id === profile?.id && (
          <button onClick={handleEditProfile}> Edit Profile </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
