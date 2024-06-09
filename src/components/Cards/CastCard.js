import { img_pp } from "../../utils/constant";

const CastCard = ({ name, image, character }) => {
  if (!image) return;
  return (
    <div className="w-60 text-center">
      <div className="relative w-40 h-40 mx-auto">
        <img
          alt="cast"
          className="w-full h-full rounded-full transition-all duration-[30ms] hover:border-2 border-red-200 object-cover"
          src={img_pp + image}
        />
      </div>
      <p className="mt-2 text-lg  text-white font-medium">{name}</p>
      <p className="text-sm font-normal text-gray-500">{character}</p>
    </div>
  );
};

export default CastCard;
