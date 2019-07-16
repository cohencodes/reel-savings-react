import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { color: '#555', ui: '#fff', bg: '#eee' },
    dark: { color: '#ddd', ui: '#333', bg: '#555' }
  });

  // set the body tag according to theme
  if (!theme.isLightTheme) {
    document.body.style.backgroundColor = '#333';
  } else {
    document.body.style.backgroundColor = '';
  }

  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
