import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetail from './ItemDetail';

const ItemList = () => {
  const { filteredItems } = useContext(ItemContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const itemList = filteredItems.map(item => {
    return <ItemDetail item={item} key={item.name} />;
  });

  return filteredItems.length ? (
    <div
      className="item-list"
      style={{ color: theme.color, background: theme.ui }}
    >
      <ul>{itemList}</ul>
    </div>
  ) : (
    <div className="empty">You don't have any items</div>
  );
};

export default ItemList;
