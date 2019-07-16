import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.color }}>
      <ul>
        <li>Active</li>
        <li>Paused</li>
        <li>Completed</li>
      </ul>
    </nav>
  );
};

export default Navbar;
