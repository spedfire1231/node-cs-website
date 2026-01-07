import React from 'react';
import { Server } from '../../types';
import './ServerCard.css';

interface ServerCardProps {
  server: Server;
  onCopyIP: () => void;
}

const ServerCard: React.FC<ServerCardProps> = ({ server, onCopyIP }) => {
  return (
    <div className="server-card">
      <div className="server-header">
        <h3>{server.name}</h3>
        <span className={`status ${server.status}`}>
          {server.status === 'online' ? 'Онлайн' : 'Офлайн'}
        </span>
      </div>
      
      <div className="server-info">
        <div className="info-row">
          <span className="label">IP Адрес:</span>
          <span className="value">{server.ip}:{server.port}</span>
        </div>
        <div className="info-row">
          <span className="label">Режим игры:</span>
          <span className="value">{server.gameMode}</span>
        </div>
      </div>
      
      <div className="server-actions">
        <button className="copy-ip-btn" onClick={onCopyIP}>
          Скопировать IP
        </button>
      </div>
    </div>
  );
};

export default ServerCard;