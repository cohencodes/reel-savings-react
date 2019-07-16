import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      {isLightTheme ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
