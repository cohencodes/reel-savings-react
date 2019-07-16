import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { color: '#555', ui: '#ddd', bg: '#eee' },
    dark: { color: '#ddd', ui: '#333', bg: '#555' }
  });

  console.log(theme);

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
