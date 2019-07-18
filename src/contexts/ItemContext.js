import React, { createContext, useReducer, useState } from 'react';
import { itemReducer } from '../reducers/ItemReducer';
import STORE from '../STORE';

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [items, dispatch] = useReducer(itemReducer, STORE);
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = value => {
    let filteredItems = items.filter(item => {
      return item.name.toLowerCase().startsWith(value.toLowerCase());
    });
    setFilteredItems(filteredItems);
  };

  const navFilter = value => {
    if (value === 'All') {
      return setFilteredItems(items);
    }
    let filteredItems = items.filter(item => {
      return item.status.startsWith(value);
    });
    setFilteredItems(filteredItems);
  };

  return (
    <ItemContext.Provider
      value={{ filteredItems, dispatch, filterItems, navFilter }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
