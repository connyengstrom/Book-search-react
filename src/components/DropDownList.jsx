import React from 'react';

/* Component to create a drop-down list.
Receives an array with objects for the list. The objects should have the keys 'value' and 'text'.
setSearchType is a function that returns the selected value to the parent. */
const DropDownList = ({ selections, setSearchType }) => {
  return (
    <select onChange={(e) => setSearchType(e.target.value)}>
      {selections.map((data, index) => (
        <option key={index} value={data.value}>{data.text}</option>
      ))}
    </select>
  );
};

export default DropDownList;
