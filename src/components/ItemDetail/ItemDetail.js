import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ProgressBar from '../ProgressBar/ProgressBar';
import './ItemDetail.css';

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <li
      style={{ backgroundColor: theme.cardbg }}
      className={!isLightTheme ? 'dark-mode-item item' : 'item'}
    >
      <div className="item-info">
        <h3 className="name">{item.name}</h3>
        <div className="bar" />
      </div>
      <div className="left-col">
        <img src={item.imgURL} alt={item.name} className="item-image" />
      </div>
      <div className="right-col">
        <p className="total">{item.total}</p>
        <ProgressBar
          strokeWidth="8"
          sqSize="60"
          percentage={item.percentSaved}
        />
        <button
          onClick={() => dispatch({ type: 'TOGGLE_STATUS', name: item.name })}
          className={
            item.status === 'Active' ? 'active status-btn' : 'paused status-btn'
          }
        >
          {/* set button text depending on status */}
          {item.status === 'Active' ? 'Active' : 'Paused'}
        </button>
      </div>
    </li>
  );
};

export default ItemDetails;
