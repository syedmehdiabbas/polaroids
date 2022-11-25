import React, { useState } from "react";

const ClearButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-full flex items-center bg-white border-y-2 border-lime-700 px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

const SearchBox = ({ query, setQuery, page, setPage }) => {
  const [queryInput, setQueryInput] = useState(query);

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(queryInput);
    setPage(1);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex xl:z-20 h-14 xl:h-16 mt-12 xl:mt-0 w-full md:w-1/2 px-3 xl:fixed xl:shadow-sm"
    >
      <input
        className="text-2xl bg-white placeholder:uppercase outline-none w-full pl-4 pr-2 rounded-l-sm placeholder:text-lg border-2 border-r-0 border-lime-700"
        placeholder="Find polaroids"
        value={queryInput}
        onChange={(e) => setQueryInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") submitHandler(e);
        }}
      />
      {queryInput && (
        <ClearButton
          onClick={() => {
            setQueryInput("");
            setQuery("");
            setPage(1);
          }}
        />
      )}
      <button className="text-theme-gray hover:text-white uppercase bg-black px-8 rounded-r-sm text-lg tracking-wide font-bold">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
