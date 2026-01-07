import React from 'react';
import './DiscordWidget.css';

const DiscordWidget = () => {
  return (
    <div className="discord-widget">
      <h3>📢 Наш Discord</h3>
      <div className="discord-content">
        <iframe 
          width="350"
          height="1"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          title="Discord Widget"
        />
      </div>
      <a 
        href="https://discord.gg/6ZdbBSaQ77" 
        target="_blank" 
        rel="noopener noreferrer"
        className="discord-join-btn"
      >
        Присоединиться к Discord
      </a>
    </div>
  );
};

export default DiscordWidget;