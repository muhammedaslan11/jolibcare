import React from "react";

const Card = ({ name, subtitle, imageUrl, link,  }: any) => {

  return (
    <a
      href={`/product/${link}`}
      className="relative inline-block w-full h-[400px] shadow-lg overflow-hidden border border-gray-300 transition duration-300 group face front rounded-xl"
    >
      {/* <div className="flag absolute z-40 w-36 h-8 top-7 right-[-25px] bg-[rgba(210,210,210,0.7)] transform rotate-45 translate-x-4 -translate-y-4 flex items-center justify-center text-xs font-bold text-white">
        {flag}
      </div> */}
      <picture>
        <img src={imageUrl}
          alt={name || "Image"}
          className="absolute top-0 left-0 object-cover !h-full !w-full" />
      </picture>
      <div className="absolute bottom-0 h-28 left-0 right-0 p-4 bg-[rgba(210,210,210,0.7)] text-white text-center">
        <h2 className="relative text-2xl font-bold uppercase before:absolute before:left-3 before:right-7 before:bottom-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-[92%]">
          {name}
        </h2>
        <p className="text-sm capitalize transform translate-y-0 opacity-1 md:translate-y-5 md:opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {subtitle}
        </p>
      </div>
      <div className="absolute inset-7 border-2 border-white z-100 pointer-events-none" />
      <div className="absolute inset-0 bg-transparent z-20">
        <div className="absolute top-[-1px] right-[-1px] bottom-[-1px] left-[-1px] content-[''] bg-gradient-to-r from-white/40 to-white/50 via-black/10 opacity-100 transition-opacity duration-200 ease-in-out group-hover:opacity-0" />
      </div>
    </a>
  );
};

export default Card;
