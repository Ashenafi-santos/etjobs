import React from "react";

const Pagination = ({
  totalJobs,
  jobsPerPage,
  setCurrentPage,
  currentPage,
  firstIndex,
  lastIndex,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-around py-7">
      <div className="flex gap-5 w-[1000px]">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`px-5  py-2 rounded-xl  ${
              currentPage == page && "bg-primary text-white"
            } `}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        <p>
          Showing {firstIndex + 1} to{" "}
          {totalJobs < lastIndex ? totalJobs : lastIndex} of {totalJobs}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
