import CastCard from "./CastCard";

const CastList = ({ cast, movie }) => {
  return (
    <div className="p-4 pt-8  bg-gradient-to-r  from-black to-black">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white mb-10">Cast of {movie}</h2>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-8 pb-4">
        {cast?.map((a) => (
          <CastCard
            key={a?.id}
            name={a?.name}
            character={a?.character}
            image={a?.profile_path}
          />
        ))}
      </div>
    </div>
  );
};

export default CastList;
