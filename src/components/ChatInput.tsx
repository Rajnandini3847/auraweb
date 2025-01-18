'use client';
import React, { useRef, useState } from "react";
import { ImageIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"



const ChatInput = () => {
    const fileInputRef = useRef(null);
    const [inputText, setInputText] = useState("");
    const [mounted, setMounted] = useState(false);
    
    // Handle Hydration mismatch 
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log("Image Uploaded to Auraweb :)");
            };
            reader.readAsDataURL(file);
            
        }
    };

    if(!mounted) {
        return null;
    }


    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 p-4 w-full max-w-3xl">
            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">
                {/* Hidden Input */}
                <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                />
                
                {/* Upload icon */}
                <button 
                    onClick={handleUploadClick}
                    className="p-1   transition-colors" 
                    title="Add an image"
                >
                    <ImageIcon size={20} className=""/>
                </button>
                
                {/* Input text */}
                <input 
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask Auraweb..."
                    className="flex-1 bg-transparent text-white placeholder-zinc-400 focus:outline-none"
                />

                {/* Send icon */}
                <button 
                    className="p-1 hover:bg-zinc-800 rounded-full transition-colors"
                    title="Send"
                >
                    <ArrowRight size={20} className="text-zinc-400"/>
                </button>
            </div>
        </div>
    );
};

export default ChatInput;