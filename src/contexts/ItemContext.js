import React, { createContext, useReducer, useState } from 'react';
import { itemReducer } from '../reducers/ItemReducer';
import STORE from '../STORE';

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [items, dispatch] = useReducer(itemReducer, STORE);
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = name => {
    let filteredItems = items.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(name)
      );
    });
    setFilteredItems(filteredItems);
  };

  return (
    <ItemContext.Provider value={{ filteredItems, dispatch, filterItems }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
