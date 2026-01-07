import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/node.jpg'; // импортируйте картинку
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section 
        className="hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Добро пожаловать на NODE</h1>
          <p className="hero-subtitle">
            Лучший зомби сервер Counter-Strike 1.6
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Активный сервер</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Онлайн</span>
            </div>
          </div>
          <Link to="/servers" className="cta-button">
            Подключиться к серверу
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Особенности нашего сервера</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🧟 Zombie Mode</h3>
            <p>Классический зомби CSO режим с уникальными классами и способностями</p>
          </div>
          <div className="feature-card">
            <h3>🗺️ Кастомные карты</h3>
            <p>Большой выбор карт специально для зомби режима</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Быстрый коннект</h3>
            <p>Низкий пинг и стабильное соединение для всех игроков</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;