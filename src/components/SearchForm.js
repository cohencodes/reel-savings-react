import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const SearchForm = () => {
  const { filterItems } = useContext(ItemContext);
  const [name, setName] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setName(value);
    filterItems(value);
  };

  return (
    <input
      type="text"
      value={name}
      placeholder="Search items..."
      onChange={handleChange}
    />
  );
};

export default SearchForm;
