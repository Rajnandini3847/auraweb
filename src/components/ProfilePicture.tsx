'use client';
import React, { useState} from "react";

const ProfilePicture = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="flex flex-col items-center">
            <label htmlFor="profile-picture" className="cursor-pointer">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
                     <img 
                        src={image || "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-minan1398-675920.jpg&fm=jpg"}
                        alt="Profile" 
                        className="w-full h-full object-cover" />
            </div>
            </label>
            <input 
               type="file"
               id="profile-picture"
               accept="image/*"
               onChange={handleImageChange}
               className="hidden"
             />
            <p className="text-white-600 text-sm font-bold">Upload Image</p>
        </div>
        
    );
};

export default ProfilePicture;