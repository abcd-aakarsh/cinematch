import { useParams } from "react-router-dom";
import { useEpisodeInfo } from "../customHooks/useEpisodeInfo";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { img_url, img_urlb } from "../utils/constant";
import EpisodeList from "./Cards/EpisodeList";
import Headerrr from "./Headerrr";
import Footer from "./Footer";

const EpisodeInfoPage = () => {
  const { id, cid } = useParams();
  useEpisodeInfo(id, cid);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const EpisodeDetails = useSelector(
    (store) => store.episodeInfo?.EpisodeDetails
  );

  const { poster_path, episodes, air_date, vote_average, overview } =
    EpisodeDetails;
  const year = air_date?.substr(0, 4);
  const backdrop_path = episodes?.[0]?.still_path;

  return (
    <>
      <Headerrr />
      <div
        className="flex justify-center absolute -z-20 items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${
            img_urlb + backdrop_path
          })`,
          position: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div className="py-24 max-w-[1420px] mx-auto">
        <div className="grid md:grid-cols-3  lg:max-w-screen-2xl mx-auto gap-6 md:gap-16 px-8">
          <div className="justify-self-center lg:justify-self-start">
            <img
              alt="main"
              src={img_url + poster_path}
              className="md:w-96 w-44 border-2 border-white rounded-lg"
            />
          </div>
          <div className="text-gray-200 text-center lg:text-start md:col-span-2">
            <h2 className="text-4xl lg:text-6xl font-semibold mb-1">
              Season : {cid}
            </h2>
            <div className="flex text-gray-300 mb-1 justify-center lg:justify-start lg:text-lg text-sm font-medium gap-6">
              <p>{year}</p>
            </div>
            <p className="text-gray-300  mb-8 text-sm lg:text-lg font-medium gap-6">
              Rated {vote_average?.toFixed(1)}/10
            </p>
            <p className="text-base font-normal w-full md:w-4/6 mb-8">
              {overview}
            </p>
            <p className="lg:text-3xl  font-semibold w-full md:w-4/6 mb-4">
              Total Episodes : {episodes?.length}
            </p>
          </div>
        </div>
      </div>
      <div className="text-white bg-gradient-to-r  from-black to-black">
        <EpisodeList title={`Episodes`} episodes={episodes} />
      </div>
      <Footer />
    </>
  );
};

export default EpisodeInfoPage;
