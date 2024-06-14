import { Link } from "react-router-dom";
import { img_url } from "../../utils/constant";

const SeasonCard = ({ season, seriesid }) => {
  return (
    <>
      <div>
        <Link to={`/series/${seriesid}/${season.season_number}`}>
          <div className="w-36 md:w-60">
            <img
              src={img_url + season.poster_path}
              alt="MovieCard"
              className="rounded-2xl hover:border-2 hover:border-white linear duration-30"
            />
          </div>
          <div className="py-4 ">
            <h3 className="text-sm font-bold pl-1 text-gray-200 ">
              {season?.name}
            </h3>
            <h3 className="text-sm font-bold pl-1 text-gray-400 ">
              {season?.episode_count} episodes
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SeasonCard;
