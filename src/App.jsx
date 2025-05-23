// App.jsx - Main Content
import React from 'react';

// Import Data
import { linksData, profileData, siteConfig } from './assets/data.js';

// Import Components
import LinkCard from './components/LinkCard.jsx';
import ProfileHeader from './components/ProfileHeader.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const handleLinkClick = (url) => {
    console.log('Link clicked:', url);
    window.open(url, '_blank');
  };

  const handleEmailClick = (url) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      handleLinkClick(url);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${siteConfig.theme.primaryGradient} p-6`}>

      <div className="max-w-2xl mx-auto">
        {/* Profile Header Section */}
        <ProfileHeader 
          name={profileData.name}
          subtitle={profileData.subtitle}
          avatar={profileData.avatar}
          bio={profileData.bio}
        />

        {/* Links Section */}
        <div className="space-y-4">
          {linksData.map((link, index) => (
            <LinkCard
              key={link.id}
              title={link.title}
              description={link.description}
              url={link.url}
              icon={link.icon}
              gradient={link.gradient}
              delay={index * 0.1}
              onClick={link.url.startsWith('mailto:') ? handleEmailClick : handleLinkClick}
            />
          ))}
        </div>

        {/* Footer Section */}
        <Footer 
          customMessage="✨ Built with passion by a creative developer"
        />
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default App;