import { Link } from "react-router-dom";
import { img_url } from "../../utils/constant";
const SeriesCard = ({ series }) => {
  if (!series.poster_path) return;
  return (
    <>
      <Link className="w-36 md:w-60" to={`/series/${series.id}`}>
        <div className="w-36 md:w-60">
          <img
            src={img_url + series.poster_path}
            alt="SeriesCard"
            className="rounded-lg hover:border-2 hover:border-white linear duration-30"
          />
        </div>
        <div className="pt-4 text-gray-200">
          <h3 className="text-sm pl-1 font-bold  ">{series.name}</h3>
        </div>
      </Link>
    </>
  );
};

export default SeriesCard;
