// CarDetails.js
import React, { useState } from 'react';

const CarDetails = ({ name, price, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="car-details">
      <h2>{name}</h2>
      <p><strong>Price:</strong> {price}</p>
      <p>{isExpanded ? description : description.slice(0, 50) + '...'}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default CarDetails;
