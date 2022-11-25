import React from "react";

const Button = ({ onClick, isDisabled, children }) => {
  return (
    <button
      className="disabled:text-gray-300 disabled:cursor-auto rounded-sm px-6 py-2 text-lg tracking-wider text-theme-gray hover:text-white bg-lime-600 flex justify-center items-center uppercase "
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
