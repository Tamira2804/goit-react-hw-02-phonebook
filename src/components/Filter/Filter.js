import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    <label htmlFor="filterId"> Find contacts by name </label>
    <input type="text" value={value} id="filterId" onChange={onChange} />
  </div>
);

export default Filter;
