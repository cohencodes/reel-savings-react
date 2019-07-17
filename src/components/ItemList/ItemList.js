import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ItemContext } from '../../contexts/ItemContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import Emoji from '../Emoji/Emoji';
import './ItemList.css';

const ItemList = () => {
  const { filteredItems } = useContext(ItemContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const itemList = filteredItems.map(item => {
    return <ItemDetail item={item} key={item.name} />;
  });

  return filteredItems.length ? (
    <div
      style={{ color: theme.color, background: theme.ui }}
      className="list-container"
    >
      <ul className="item-list">{itemList}</ul>
    </div>
  ) : (
    <div className={!isLightTheme ? 'empty empty-dark' : 'empty'}>
      You're almost there! Keep saving <Emoji symbol="😃" />
    </div>
  );
};

export default ItemList;
