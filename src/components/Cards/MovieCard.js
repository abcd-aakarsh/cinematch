import { Link } from "react-router-dom";
import { img_url } from "../../utils/constant";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div>
        <Link to={`/movie/${movie.id}`}>
          <div className="w-60   ">
            <img
              src={img_url + movie.poster_path}
              alt="MovieCard"
              className="rounded-2xl hover:border-2 hover:border-white linear duration-30"
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

export default MovieCard;
