import React, { FormEvent, useState } from "react";
import "../ProfileEditForm.css";

const ImageUpload: React.FC = () => {
  const [input, setInput] = useState({ imagePreviewUrl: "" });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const previewUrl = URL.createObjectURL(file);
      setInput({
        imagePreviewUrl: previewUrl,
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // This is where we will call the update user function
    console.log(input);
    //setInput(initialProfile);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Upload Photo</label>{" "}
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit" className="uploadPhoto">
          Upload Photo
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
