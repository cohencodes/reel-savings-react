import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import ItemContextProvider from './contexts/ItemContext';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ItemContextProvider>
          <ThemeToggle />
          <Navbar />
          <ItemList />
        </ItemContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
