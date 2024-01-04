import { UserProfile } from "../../models/Profile";
import { FC } from "react";
interface ProfileProps {
  profile: UserProfile;
  onDislike: (id: string) => void;
  onLike: (id: string) => void;
}
const Profile: FC<ProfileProps> = ({ profile, onLike, onDislike }) => {
  return (
    <div>
      <div className="slider">
        <img className="sliderimage" src={profile.profilePhoto || ""} alt={`${profile.username}`} />
        <div className="slider__text">
          <div>{profile.username}</div>
          <div>{profile.age}</div>
          <div>{profile.location}</div>
          <div>{profile.bio}</div>
        </div>
        {profile.id !== "abc_123" ? (
          <div className="slider__buttons">
            <button onClick={() => onDislike(profile.id)}>Dislike (X)</button>
            <button onClick={() => onLike(profile.id)}>Like (♥)</button>
          </div>
        ) : (
          <button> Edit Profile </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
