import React from 'react';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';

const PageNumber = ({ number, active = false, onPageChange }) => (
  <span
    className={`${active && 'bg-primary flex items-center justify-center h-6 w-6 p-1 rounded text-xs text-white'} font-normal`}
    onClick={() => onPageChange(number)}>
    {number}
  </span>
);
const ellipsisIndex = 3;
const Pagination = (props) => {
  const pageNumbers = Array.from({ length: props.totalPages }, (_, index) => index + 1);
  return (
    <section className="mt-[32px] h-10 rounded flex items-center px-4 justify-between text-inactive bg-white">
      <span className="text-[#8D9091] text-xs">
        {props.startIndex} - {props.endIndex} of {props.total} item(s)
      </span>
      <div className="flex gap-3">
        <button
          className="w-6 h-6 border flex items-center justify-center rounded-md border-[#8D9091]"
          onClick={props.onPreviousClick}>
          <LeftArrow />
        </button>
        <section className="flex items-center space-x-3">
          {pageNumbers.map((pageNumber, index) => {
            const showEllipsis = index === ellipsisIndex && pageNumbers?.length >= 2;
            const showPageNumber = index < ellipsisIndex || index > pageNumbers.length;
            return (
              <React.Fragment key={index}>
                {showEllipsis && <span className="mb-2 px-2">...</span>}
                {showPageNumber && (
                  <PageNumber
                    number={pageNumber}
                    onPageChange={() => props.onPageNumberChange?.(pageNumber)}
                    active={props.currentPageNumber === pageNumber}
                  />
                )}
              </React.Fragment>
            );
          })}
        </section>
        <button
          className="w-6 h-6 border flex items-center justify-center border-[#8D9091] rounded-md"
          onClick={props.onNextClick}>
          <RightArrow />
        </button>
      </div>
    </section>
  );
};
export default Pagination;
