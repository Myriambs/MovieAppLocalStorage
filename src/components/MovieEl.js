 import React from "react";

const MovieEl = ({ movie: { title, vote_average, overview, poster_path } }) => {
  const getClassByRate = (vote) => {
    if (vote >= 7.5) return "green";
    else if (vote >= 7) return "orange";
    else return "red";
  };

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="movie" style={{ marginLeft: "auto" }}>
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getClassByRate(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default MovieEl;
