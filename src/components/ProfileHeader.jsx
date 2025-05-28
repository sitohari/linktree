// components/ProfileHeader.jsx
import React from 'react';

const ProfileHeader = ({ name, subtitle, avatar, bio }) => {
    return (
        <div className="text-center mb-12" style={{animation: 'slideUp 0.6s ease-out both'}}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6 flex items-center justify-center border-4 border-white/20 shadow-2xl hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">{avatar}</span>
        </div>
        <h1 className="text-xl  lg:text-4xl  font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm {name}
        </h1>
        <p className="text-white/70 text-base sm:text-lg mb-2">
            {subtitle}
        </p>
        </div>
    );
};

export default ProfileHeader;