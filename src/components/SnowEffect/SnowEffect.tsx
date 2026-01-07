import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './SnowEffect.css';

const SnowEffect = () => {
  const { theme } = useTheme();
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (theme === 'winter') {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        flakes.push(
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
          >
            ❄
          </div>
        );
      }
      setSnowflakes(flakes);
    } else {
      setSnowflakes([]);
    }
  }, [theme]);

  return <>{snowflakes}</>;
};

export default SnowEffect;