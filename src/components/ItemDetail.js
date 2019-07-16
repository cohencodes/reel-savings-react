import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import { itemReducer } from '../reducers/ItemReducer';

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  return (
    <li>
      <div className="name">{item.name}</div>
      <div className="percent-saved">{item.percentSaved}</div>
      <div className="total">{item.total}</div>
      <div className="status">{item.status}</div>
      <button
        onClick={() => dispatch({ type: 'REMOVE_ITEM', name: item.name })}
      >
        Delete
      </button>
    </li>
  );
};

export default ItemDetails;
