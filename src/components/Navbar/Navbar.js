import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ItemContext } from '../../contexts/ItemContext';
import './Navbar.css';
import SearchForm from '../SearchForm/SearchForm';

const Navbar = () => {
  const { navFilter } = useContext(ItemContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [Clear] = useState('Clear');
  const [Active] = useState('Active');
  const [Paused] = useState('Paused');
  const [Completed] = useState('Completed');

  const handleClick = e => {
    const { value } = e.target;

    navFilter(value);
  };

  return (
    <nav style={{ background: theme.ui, color: theme.color }}>
      <ul>
        <input
          type="button"
          value={Clear}
          onClick={handleClick}
          className="nav-btn"
        />
        <input
          type="button"
          value={Active}
          onClick={handleClick}
          className="nav-btn"
        />
        <input
          type="button"
          value={Paused}
          onClick={handleClick}
          className="nav-btn"
        />
        <input
          type="button"
          value={Completed}
          onClick={handleClick}
          className="nav-btn"
        />
        <SearchForm />
      </ul>
    </nav>
  );
};

export default Navbar;
