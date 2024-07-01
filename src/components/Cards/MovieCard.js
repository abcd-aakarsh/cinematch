import { Link } from "react-router-dom";
import { img_url } from "../../utils/constant";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return;
  return (
    <>
      <Link className="w-36 md:w-60" to={`/movie/${movie.id}`}>
        <div className="w-36 md:w-60">
          {!movie.poster_path ? (
            <div className="bg-gray-600 rounded-lg h-36 w-36 md:w-60 border"></div>
          ) : (
            <img
              src={img_url + movie.poster_path}
              alt="MovieCard"
              className="rounded-lg hover:border-2 hover:border-white linear duration-30"
            />
          )}
        </div>
        <div className="pt-4 text-gray-200">
          <h3 className="text-sm pl-1 font-bold  ">{movie.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
