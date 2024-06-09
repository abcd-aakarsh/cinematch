import ImageCard from "./ImageCard";

const ImageList = ({ movie, movieImages }) => {
  return (
    <div className="p-4 py-8 bg-gradient-to-r from-black to-black">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-14">
          Images of {movie}
        </h2>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-8 pb-4">
        <div className="flex gap-4 px-4">
          {movieImages?.map((a) => (
            <ImageCard key={a?.id} image={a?.file_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageList;
