import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";

const itemsPerPage = 6;

const CarList = ({ cars, currentPage }) => {
  const [visibleCars, setVisibleCars] = useState([]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const carsToDisplay = cars.slice(start, end);
    setVisibleCars(carsToDisplay);
  }, [cars, currentPage]);

  return (
    <div className="row">
      {visibleCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
