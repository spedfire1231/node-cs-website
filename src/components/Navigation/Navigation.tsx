import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/servers', label: 'Серверы' },
  { path: '/news', label: 'Новости' }, // Добавьте это
  { path: '/rules', label: 'Правила' },
  { path: '/privileges', label: 'Привилегии' },
  { path: '/contacts', label: 'Контакты' }
];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">NODE</span>
          <span className="logo-subtitle">CS 1.6 ZOMBIE</span>
        </div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;