import React, { useState, useEffect } from 'react';
import { Server } from '../../types';
import ServerCard from '../../components/ServerCard';
import './Servers.css';

const Servers: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Загрузка данных о серверах
    const mockServers: Server[] = [
      {
        id: 1,
        name: 'Зомбированые кровосиси [ZM]',
        ip: '91.211.118.49',
        port: '27029',
        gameMode: 'Zombie Plague',
        status: 'online',
      }
    ];
    
    setTimeout(() => {
      setServers(mockServers);
      setLoading(false);
    }, 1000);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('IP адрес скопирован в буфер обмена!');
  };

  if (loading) {
    return <div className="loading">Загрузка серверов...</div>;
  }

  return (
    <div className="servers">
      <h1>Наши серверы</h1>
      <div className="servers-grid">
        {servers.map((server) => (
          <ServerCard 
            key={server.id} 
            server={server}
            onCopyIP={() => copyToClipboard(`${server.ip}:${server.port}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Servers;