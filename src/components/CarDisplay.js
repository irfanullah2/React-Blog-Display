// CarDisplay.js
import React from 'react';
import CarDetails from './CarDetails';
import carData from '../data.json'; // Importing the JSON data
import '../style/cardisplay.css';

const CarDisplay = () => {
  return (
    <div className="car-display">
      <h1>Car Listings</h1>
      {carData.map((car) => (
        <CarDetails 
          key={car.id} 
          name={car.name} 
          price={car.price} 
          description={car.description} 
        />
      ))}
    </div>
  );
};

export default CarDisplay;
