import { img_url } from "../../utils/constant";
const SeriesCard = ({ series }) => {
  return (
    <>
      <div>
        <div className="w-60   ">
          <img
            src={img_url + series.poster_path}
            alt="SeriesCard"
            className="rounded-2xl hover:border-2 hover:border-white linear duration-30"
          />
        </div>
        <div className="py-4">
          <h3 className="text-sm font-bold  ">{series.original_name}</h3>
        </div>
      </div>
    </>
  );
};

export default SeriesCard;
