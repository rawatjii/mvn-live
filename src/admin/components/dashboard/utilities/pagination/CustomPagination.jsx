// custom-pagination.jsx
import React from 'react';
import './custom-pagination.css';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="CustomPaginationContainer">
      <ul>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Prev
          </button>
        </li>

        
        <li>
        Page {currentPage} of {totalPages}
          </li>
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CustomPagination;
