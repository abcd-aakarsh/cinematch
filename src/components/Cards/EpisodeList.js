import EpisodeCard from "./EpisodeCard";

const EpisodeList = ({ title, episodes }) => {
  return (
    <div className=" bg-gradient-to-r  from-black to-black text-white py-6">
      <div className="px-4 md:px-14 py-4">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
      </div>
      <div className="px-4 md:px-14 py-4 overflow-x-auto no-scrollbar">
        <div className="flex flex-col gap-12 md:gap-5">
          {episodes && episodes.length > 0 ? (
            episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          ) : (
            <p className="text-center text-gray-500">No episodes available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;
