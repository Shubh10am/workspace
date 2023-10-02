import "./styles.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch

import CarList from "./Component/CarList";
import SearchBar from "./Component/SearchBar";
import Pagination from "./Component/Pagination";

import carsData from "./data/carsData.json";

const App = () => {
  const [cars, setCars] = useState(carsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 6;

  // Handle search and filter cars based on search term
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
    const filteredCars = carsData.filter((car) =>
      car.name.toLowerCase().includes(term.toLowerCase())
    );
    setCars(filteredCars);
  };

  return (
    <Router>
      <div className="app">
        <h1>Car Search</h1>
        <SearchBar onSearch={handleSearch} />

        <Routes>
          <Route path="/page/:page" element={<CarList cars={cars} currentPage={currentPage} />} />
          <Route path="/" element={<CarList cars={cars} currentPage={currentPage} />} />
        </Routes>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(cars.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </Router>
  );
};

export default App;
