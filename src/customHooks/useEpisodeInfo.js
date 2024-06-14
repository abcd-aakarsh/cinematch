import { useDispatch } from "react-redux";
import { addEpisodeDetails } from "../utils/episodeInfoSlice";
import { api_options } from "../utils/constant";
import { useEffect } from "react";

export const useEpisodeInfo = (id, cid) => {
  const dispatch = useDispatch();
  const getEpisodeInfo = () => {
    const getEpisodeDetails = async () => {
      const episodeInfo = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${cid}?language=en-US`,
        api_options
      );
      const result = await episodeInfo.json();

      dispatch(addEpisodeDetails(result));
    };
    getEpisodeDetails();
  };
  useEffect(() => {
    getEpisodeInfo();
  }, [cid]);
};
