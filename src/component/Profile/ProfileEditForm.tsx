import React, { ChangeEvent, FormEvent, useState } from "react";
import { UserProfile } from "../../models/Profile";
import "./ProfileEditForm.css";
import ImageUpload from "./ImageUpload/ImageUpload";

const ProfileEditForm: React.FC = () => {
  const initialProfile: Partial<UserProfile> = {
    username: "",
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
    // This is where we will call the update user function
    console.log(input);
    setInput(initialProfile);
  };

  return (
    <div>
      <form onSubmit={handleProfileSubmit}>
        <label>Username</label>{" "}
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <label>Email</label>{" "}
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <label>Bio</label>{" "}
        <input
          type="textarea"
          name="bio"
          value={input.bio}
          onChange={handleChange}
        />
        <label>Age</label>{" "}
        <input
          type="number"
          name="age"
          value={input.age || 0}
          onChange={handleChange}
        />
        <button type="submit" className="profileButton">
          Edit Profile
        </button>
      </form>
      <ImageUpload />
    </div>
  );
};

export default ProfileEditForm;
