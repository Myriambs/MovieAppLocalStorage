import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ addMovie }) => {

  const [title, setTitle] = useState();
  const [vote_avg, setVote_avg] = useState();
  const [overview, setOverview] = useState();
  const [poster_path, setPoster_path] = useState();


const Add=()=>{
  addMovie({

id:uuidv4(),
title: title,
poster_path: poster_path, 
overview: overview,
vote_avg:vote_avg

  })
}

  return (
    <div className="form">
      <div id="signup">
        <h1>Add Movie</h1>

        <form>
          <div className="top-row">
            <div className="field-wrap">
              <label>
              {title} <span className="req">*</span>
              </label>
              <input
                type="text"
                // value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label>
                Post Image<span className="req">*</span>
              </label>
              <input
                type="text"
                value={poster_path}
                onChange={(e) => setPoster_path(e.target.value)}
              />
            </div>
          </div>

          <div className="field-wrap">
            <label>
              Overview <span className="req">*</span>
            </label>
            <input
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </div>

          <div className="field-wrap">
            <label>
              Vote<span className="req">*</span>
            </label>
            <input
              type="text"
              value={vote_avg}
              onChange={(e) => setVote_avg(e.target.value)}
            />
          </div>

          <button
            type="button"
         onClick={()=>Add()}
          >
            Add movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

// Partie challenge 

// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const Form = ({ addMovie }) => {
//   const [title, setTitle] = useState("");
//   const [vote_avg, setVote_avg] = useState("");
//   const [overview, setOverview] = useState("");
//   const [poster_path, setPoster_path] = useState("");

//   const handleAddMovie = () => {
//     addMovie({
//       id: uuidv4(),
//       title,
//       poster_path,
//       overview,
//       vote_average: vote_avg,
//     });
//     // Clear inputs after adding
//     setTitle("");
//     setVote_avg("");
//     setOverview("");
//     setPoster_path("");
//   };

//   return (
//     <div className="form">
//       <div id="signup">
//         <h1>Add Movie</h1>
//         <form>
//           <div className="top-row">
//             <div className="field-wrap">
//               <label>Title <span className="req">*</span></label>
//               <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//             </div>
//             <div className="field-wrap">
//               <label>Poster Image URL <span className="req">*</span></label>
//               <input type="text" value={poster_path} onChange={(e) => setPoster_path(e.target.value)} />
//             </div>
//           </div>
//           <div className="field-wrap">
//             <label>Overview <span className="req">*</span></label>
//             <input type="text" value={overview} onChange={(e) => setOverview(e.target.value)} />
//           </div>
//           <div className="field-wrap">
//             <label>Vote Average <span className="req">*</span></label>
//             <input type="text" value={vote_avg} onChange={(e) => setVote_avg(e.target.value)} />
//           </div>
//           <button type="button" onClick={handleAddMovie}>
//             Add Movie
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
