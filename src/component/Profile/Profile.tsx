import { useNavigate } from "react-router-dom";
import { UserProfile } from "../../models/Profile";
import { FC, useContext } from "react";
import AuthContext from "../../AuthContext";
interface ProfileProps {
  profile: UserProfile;
  onDislike: (id: string) => void;
  onLike: (id: string) => void;
}
const Profile: FC<ProfileProps> = ({ profile, onLike, onDislike }) => {
  const { userProfile } = useContext(AuthContext);
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
        {userProfile?.id !== profile?.id ? (
          <div className="slider__buttons">
            <button onClick={() => onDislike(profile.id)}>Dislike (X)</button>
            <button onClick={() => onLike(profile.id)}>Like (♥)</button>
          </div>
        ) : (
          <button onClick={handleEditProfile}> Edit Profile </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
