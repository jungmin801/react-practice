import { ReactPropTypes } from "react";
import { Link } from "react-router-dom"; 


function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// Movie.ReactPropTypes = {
//   coverImg : ReactPropTypes.string.isRequired,
//   title : ReactPropTypes.string.isRequired,
//   summary : ReactPropTypes.string.isRequired,
//   genres : ReactPropTypes.arrayOf(ReactPropTypes.string).isRequired,
// }
export default Movie;
