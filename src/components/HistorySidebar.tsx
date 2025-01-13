'use client';
import React, { useState } from "react";


const HistorySidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* Sidebar */}
            <div 
                className={`fixed top-0 left-0 h-full w-64 rounded-2xl bg-zinc-900 text-white shadow-lg transform transition-transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button 
                   onClick={toggleSidebar}
                   className="absolute top-4 right-4 text-white text-xl font-bold"
                >
                    x
                </button>
                <ul className="mt-20 space-y-4 px-4">
                    <li className="py-2 border-b border-gray-600">Settings</li>
                    <li className="py-2 border-b border-gray-600">Activity</li>
                    <li className="py-2 border-b border-gray-600">Help</li>
                </ul>
            </div>

            {/* Tigger Icon */}
            <button 
                onClick={toggleSidebar}
                className="fixed left-8 top-4 p-3  text-white "
            >
                <div className="font-semibold text-lg ">
                Aura<span className="text-gray-400">web</span>
                </div>
                
            </button>
        </>  
    );
};

export default HistorySidebar;