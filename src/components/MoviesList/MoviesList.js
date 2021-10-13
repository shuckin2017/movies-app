import React from "react";
import MoviesItem from "../MoviesItem";
export const MoviesList = ({ repos }) => {
  if (!repos || repos.length === 0)
    return (
      <div className="text-white text-xl font-semibold">Загрузка данных...</div>
    );
  return (
    <section className="flex flex-col">
      <div className="text-white text-4xl pb-10 font-semibold ">Фильмы</div>
      <div className="grid grid-rows-5 xl:grid-rows-4 grid-flow-col gap-5 ">
        {repos.map((repo) => {
          return <MoviesItem repo={repo} />;
        })}
      </div>
    </section>
  );
};
