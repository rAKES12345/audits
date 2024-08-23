// useSelectDropdown.js
import { useState } from 'react';

const useSelectDropdown = () => {
  // Your hook logic here
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return { selectedItem, selectItem };
};

export { useSelectDropdown };
