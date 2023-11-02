import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Suggestions = ({ suggestions, handleSelect }) => {
  const navigate = useNavigate();

  return (
    <ul className="suggestions">
      {suggestions.map((product) => (
        <li key={product.id} onClick={() => handleSelect(product)}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
