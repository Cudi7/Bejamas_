import React from "react";

interface PaginationProps {
  handlePageChange: (direction: string) => void;
}

const Pagination = ({ handlePageChange }: PaginationProps) => {
  return (
    <div className="mt-[87px] mb-[260px] flex justify-center lg:mt-[107px] lg:mb-[50px]">
      <button
        className="inline-flex items-center rounded-lg border border-gray-300  py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 "
        onClick={() => handlePageChange("prev")}
      >
        Previous
      </button>

      <button
        className="ml-3 inline-flex items-center rounded-lg border border-gray-300  py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 "
        onClick={() => handlePageChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
