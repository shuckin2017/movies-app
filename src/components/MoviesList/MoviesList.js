import React from "react";
import MoviesItem from "../MoviesItem";
export const MoviesList = ({ result }) => {
  if (!result || result.length === 0)
    return (
      <div className="text-white text-xl font-semibold">Загрузка данных...</div>
    );
  return (
    <section className="flex flex-col">
      <div className="text-white text-4xl pb-10 font-semibold ">Фильмы</div>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 ">
        {result.map((item) => {
          return <MoviesItem item={item} />;
        })}
      </div>
    </section>
  );
};
