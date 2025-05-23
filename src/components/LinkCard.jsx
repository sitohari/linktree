// components/LinkCard.jsx
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const LinkCard = ({ 
  title, 
  description, 
  url, 
  icon: Icon, 
  gradient, 
  delay = 0, 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(url);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      className="group relative"
      style={{
        animation: `slideUp 0.6s ease-out ${delay}s both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`
        relative overflow-hidden rounded-2xl p-6 cursor-pointer
        bg-gradient-to-br ${gradient}
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-2
        hover:shadow-2xl hover:shadow-purple-500/25
        border border-white/20 backdrop-blur-sm
        ${isHovered ? 'animate-pulse' : ''}
      `}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-8 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center space-x-4">
          <div className={`
            flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
            bg-white/20 backdrop-blur-sm border border-white/30
            transform transition-all duration-300
            ${isHovered ? 'rotate-12 scale-110' : ''}
          `}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-200 transition-colors">
              {title}
            </h3>
            <p className="text-white/80 text-sm line-clamp-2">
              {description}
            </p>
          </div>
          
          <div className={`
            flex-shrink-0 transform transition-all duration-300
            ${isHovered ? 'translate-x-1' : ''}
          `}>
            <ExternalLink className="w-5 h-5 text-white/60" />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`
          absolute inset-0 rounded-2xl transition-opacity duration-300
          bg-gradient-to-r from-white/10 via-transparent to-white/10
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}></div>
      </div>
    </div>
  );
};

export default LinkCard;