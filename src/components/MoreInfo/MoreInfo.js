import React from "react";
import "./MoreInfo.scss";

export const MoreInfo = ({ repo, isMoreInfo }) => {
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
  } = repo;

  return <div className="more-info h-60 bg-white absolute z-50">{title}</div>;
};
