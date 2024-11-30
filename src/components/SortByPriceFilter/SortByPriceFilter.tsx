import React from "react";
import "./SortByPriceFilter.scss";
import { SortByDropdownProps } from "../../types/SortByPriceFilter";


const SortByDropdown: React.FC<SortByDropdownProps> = ({ onSortChange, currentSortOrder }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOrder = e.target.value as "lowToHigh" | "highToLow";
    onSortChange(sortOrder); 
  };

  return (
    <div className="sort-container">
      <select
        id="sortBy"
        value={currentSortOrder}
        onChange={handleSortChange}
        className="sort-dropdown"
      >
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortByDropdown;

