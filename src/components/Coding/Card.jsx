import React from "react";
import { CiShare1 } from "react-icons/ci";

const Card = ({ logo, name, star, count, desc, linkto }) => {
  return (
    <div>
      <div className="Card w-full flex flex-col gap-4 h-auto md:h-60 shadow-sm shadow-blue-200 transform hover:translate-y-3 hover:duration-200 p-5 bg-blue-950">
        <div className="icons flex justify-between">
          <img className="w-20 h-20" src={logo} alt="" />
          <a className="text-3xl" href={linkto} target="_blank" rel="noopener noreferrer"><CiShare1 /></a>
        </div>
        <div className="name text-xl font-bold">{name}</div>
        <div className="desc flex items-start gap-3 font-semibold flex-wrap">
          {count && (
            <div className="flex items-center gap-1">
              {star && count}
              {star}
            </div>
          )}
          <div className="flex-1">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
