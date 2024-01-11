import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { UserProfile } from "../../models/Profile";
import "./ProfileEditForm.css";
import ImageUpload from "./ImageUpload/ImageUpload";
import AuthContext from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { updateUserProfileBackend } from "../../services/services";

const ProfileEditForm: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile, updateUserProfile } = useContext(AuthContext);
  const initialProfile: Partial<UserProfile> = {
    displayName: "",
    email: "",
    bio: "",
    age: null,
  };
  const [input, setInput] = useState<Partial<UserProfile>>(initialProfile);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  const handleProfileSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateUserProfile(input as UserProfile);
    // This is where we will call the update user function
    console.log(input);
    setInput(initialProfile);
    navigate("/profile");
  };

  return (
    <div>
      <form onSubmit={handleProfileSubmit}>
        <label>Username</label>
        <input type="text" name="displayName" value={input.displayName} onChange={handleChange} />
        <label>Email</label> <input type="text" name="email" value={input.email} onChange={handleChange} />
        <label>Bio</label> <input type="textarea" name="bio" value={input.bio} onChange={handleChange} />
        <label>Age</label> <input type="number" name="age" value={input.age || 0} onChange={handleChange} />
        <button type="submit" className="profileButton">
          Submit
        </button>
      </form>
      <ImageUpload />
    </div>
  );
};

export default ProfileEditForm;
