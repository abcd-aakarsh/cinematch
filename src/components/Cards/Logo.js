import { img_logo } from "../../utils/constant";

const Logo = ({ name, image, id }) => {
  if (!image) return;
  return (
    <>
      <div className=" border-2 border-white px-4 py-2 rounded-3xl bg-white  ">
        <img alt="logo" className="w-16 " src={img_logo + image} />
      </div>
    </>
  );
};

export default Logo;
