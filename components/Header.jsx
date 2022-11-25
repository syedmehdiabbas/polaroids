import React from "react";

const Header = () => {
  return (
    <div className="h-16 md:h-20 fixed top-0 bg-lime-600 text-white z-10 w-full">
      <div className="xl:w-1/4 w-full flex justify-center items-center h-full xl:bg-black">
        <h1 className="text-4xl font-bold uppercase tracking-wider select-none">
          Polaroids
        </h1>
      </div>
    </div>
  );
};

export default Header;
