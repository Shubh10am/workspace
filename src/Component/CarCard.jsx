import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./CarCard.css"; // Import custom CSS

const CarCard = ({ car }) => {
  return (
    <div className="col-4 mb-4">
      <div className="card car-card">
        <img
          src={car.image}
          alt={car.name}
          className="card-img-top img-fluid"
        />
        <div className="card-body">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text">{car.make} - {car.model}</p>
          <p className="card-text">Price: ${car.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
