import { img_img } from "../../utils/constant";

const ImageCard = ({ image }) => {
  return (
    <>
      <div className="w-80 ">
        <img
          src={img_img + image}
          className="w-full h-full object-cover rounded-md "
          alt="imag"
        />
      </div>
    </>
  );
};

export default ImageCard;
