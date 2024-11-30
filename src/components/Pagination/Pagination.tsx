import React from 'react';
import './Pagination.scss'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center pagination">
      
      <div onClick={handlePrevious}
       className='pagination-navigate border-right'
       >&lt;</div>
      <span className="mx-3">
        Page {currentPage} of {totalPages}
      </span>
      
      <div onClick={handleNext}
       className='pagination-navigate border-left'
       >&gt;</div>

     
    </div>
  );
};

export default Pagination;