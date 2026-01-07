import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' && '🌙'}
      {theme === 'light' && '☀️'}
      {theme === 'winter' && '❄️'}
      <span className="theme-text">{theme}</span>
    </button>
  );
};

export default ThemeToggle;