import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="theme-btn">
        {isLightTheme ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
