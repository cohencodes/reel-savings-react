import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import ProgressBar from '../ProgressBar/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ItemDetail.css';

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  return (
    <li className="item">
      <div className="name">{item.name}</div>
      <img src={item.imgURL} alt={item.name} className="item-image" />
      <div className="total">{item.total}</div>
      <ProgressBar strokeWidth="2" sqSize="50" percentage={item.percentSaved} />
      <button
        onClick={() => dispatch({ type: 'TOGGLE_STATUS', name: item.name })}
        className={item.status === 'Active' ? 'active' : 'paused'}
      >
        {/* set button text depending on status */}
        {item.status === 'Active' ? 'Active' : 'Paused'}
      </button>
      <button
        onClick={() => dispatch({ type: 'REMOVE_ITEM', name: item.name })}
        className="icon-btn"
      >
        <FontAwesomeIcon icon="trash-alt" color="#333" size="lg" />
      </button>
    </li>
  );
};

export default ItemDetails;
