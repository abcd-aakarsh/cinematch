import { Link } from "react-router-dom";
import { img_url } from "../../utils/constant";
const MovieCardHorz = ({ movie }) => {
  return (
    <>
      <div>
        <Link to={`/movie/${movie.id}`}>
          <div className="w-72   ">
            <img
              src={img_url + movie.backdrop_path}
              alt="MovieCard"
              className="rounded-xl border-2 border-transparent hover:border-white linear duration-30"
            />
          </div>
          <div className="py-4">
            <h3 className="text-sm font-bold  ">{movie.original_title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCardHorz;
