import React, { useState } from "react";
import "./MoviesItem.scss";

export const MoviesItem = ({ item }) => {
  const {
    id,
    url,
    title,
    slug,
    year,
    background_image,
    medium_cover_image,
    synopsis,
    rating,
    runtime,
    language,
    genres,
  } = item;

  const ratingRangeClass =
    rating < 6
      ? "text-white absolute top-3 left-3 bg-red-500 px-3 rounded-md text-sm font-medium z-10"
      : "text-white absolute top-3 left-3 bg-green-500 px-3 rounded-md text-sm font-medium z-10";

  const image = medium_cover_image
    ? medium_cover_image
    : "https://via.placeholder.com/400";
  return (
    <div>
      <div className="movies-item rounded-xl overflow-hidden relative transform hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out cursor-pointer z-5">
        <img className="bg-clip-border" src={image} alt={title} />
        <div className={ratingRangeClass}>{rating}</div>
        <div className="movies-item--desc  absolute bottom-0 left-0 bg-gray-800 h-full w-full bg-opacity-75 text-white ">
          <div className="movies-item--footer flex flex-col justify-between items-center h-full w-full px-5 py-10">
            <div>
              <div className="text-xl font-medium text-left">{title}</div>
            </div>
            <div className="text-sm max-h-40 overflow-hidden">{synopsis}</div>
            <div className="flex justify-between w-full text-sm font-medium">
              <span>{year}</span>
              <span>{runtime}</span>
              <span>{language}</span>
            </div>

            <button className="absolute hidden">
              <svg
                width="40"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
