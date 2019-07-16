import React, { createContext, useReducer } from 'react';
import { itemReducer } from '../reducers/ItemReducer';
import STORE from '../STORE';

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [items, dispatch] = useReducer(itemReducer, STORE);
  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
