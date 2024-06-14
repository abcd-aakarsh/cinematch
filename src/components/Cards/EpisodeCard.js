import React from "react";
import { img_urlb } from "../../utils/constant";

const EpisodeCard = ({ episode }) => {
  const { still_path, episode_number, runtime, name, overview } = episode;

  return (
    <div className="p-4 w-full border-2 border-white md:flex md:gap-8 grid grid-cols-1  rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <div className="w-cover md:w-60 h-36 flex-shrink-0">
        {still_path ? (
          <img
            alt={`Episode ${episode_number}`}
            className="w-full h-full object-cover rounded-2xl"
            src={img_urlb + still_path}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded-2xl">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <p>{episode_number}.</p>
          <p>{name}</p>
        </div>
        <p className="text-sm text-gray-400">
          {overview || "No overview available."}
        </p>
        <p className="text-sm text-gray-400">Episode Runtime : {runtime} min</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
