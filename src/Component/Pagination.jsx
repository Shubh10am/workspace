import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</button>
          </li>
        )}
        {pageNumbers.map((page) => (
          <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
