// components/Footer.jsx
import React from 'react';

const Footer = ({ customMessage }) => {
  return (
    <div className="text-center mt-12 text-white/50" style={{animation: 'slideUp 0.6s ease-out 0.8s both'}}>
      <p className="text-sm">
        {customMessage || '✨ Made with love using React & Tailwind'}
      </p>
      <div className="mt-4 flex justify-center space-x-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default Footer;