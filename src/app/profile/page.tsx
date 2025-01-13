// src/app/profile/page.tsx
import React from "react";
//import ProfilePictureUploader from "../../components/ProfilePictureUploader";
import ProfilePicture from "../../components/ProfilePicture";

const ProfilePage = () => {
  return (
        <div className="bg-black">
          <div>
            <ProfilePicture />
          </div>
        </div>
  );
};

export default ProfilePage;