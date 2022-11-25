import React from "react";
import Button from "../Button";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    totalPages && (
      <div className="flex w-full flex-wrap justify-around items-center mt-20">
        <Button onClick={() => setPage((p) => p - 1)} isDisabled={page <= 1}>
          Prev
        </Button>
        <span className="text-lg tracking-wider flex justify-center items-center">
          {`Page ${page} of ${totalPages}`}
        </span>
        <Button
          onClick={() => setPage((p) => p + 1)}
          isDisabled={page >= totalPages}
        >
          Next
        </Button>
      </div>
    )
  );
};

export default Pagination;
