import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetail from './ItemDetail';

const ItemList = () => {
  const { items } = useContext(ItemContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return items.length ? (
    <div
      className="item-list"
      style={{ color: theme.color, background: theme.ui }}
    >
      <ul>
        {items.map(item => {
          return <ItemDetail item={item} key={item.name} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">You don't have any items</div>
  );
};

export default ItemList;
