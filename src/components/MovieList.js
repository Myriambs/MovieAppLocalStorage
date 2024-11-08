import React from "react";
import MovieEl from "./MovieEl";

const MovieList = ({ movieData, nameSearch }) => {
  return (
    <div style={{ display: "inline-flex", flexWrap: "wrap", margin: "0 auto" }}>
      {movieData
        .filter((el) =>
          el.title.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )
        .map((movie, index) => (
          <MovieEl key={index} movie={movie} /> // Add key prop here
        ))}
    </div>
  );
};

export default MovieList;
// Partie challnege ****************----------------
// import React from "react";
// import MovieEl from "./MovieEl";

// const MovieList = ({ movieData }) => {
//   return (
//     <div style={{ display: "inline-flex", flexWrap: "wrap", margin: "0 auto" }}>
//       {movieData.map((movie, index) => (
//         <MovieEl key={index} movie={movie} /> // Add key prop here
//       ))}
//     </div>
//   );
// };

// export default MovieList;
