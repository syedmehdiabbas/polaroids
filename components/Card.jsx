import React from "react";
import Image from "next/image";
import Link from "next/link";

// idea: take color hexcode and give nearest tailwind color class

const Card = ({ onClick, src }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-slate-50 p-3 pb-14 rounded shadow-sm hover:shadow-lime-desaturated -rotate-2 hover:-rotate-1 cursor-pointer`}
    >
      <Image src={src} className="" alt="andrew" width={250} height={250} />
    </div>
  );
};

export default Card;
