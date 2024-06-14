import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { img_url, img_urlb, vid_url } from "../utils/constant";
import { FaRegCirclePlay } from "react-icons/fa6";
import Logo from "./Cards/Logo";
import CastList from "./Cards/CastList";
import SeriesList from "./SeriesList";
import SeasonList from "./Cards/SeasonList";
import ImageList from "./Cards/ImageList";
import ReviewList from "./Cards/ReviewList";
import Headerrr from "./Headerrr";
import Footer from "./Footer";
import { useSeriesInfo } from "../customHooks/useSeriesInfo";

const SeriesInfoPage = () => {
  const { id } = useParams();
  useSeriesInfo(id);

  const [showFullText, setShowFullText] = useState(false);
  const limit = 175; // Character limit for the overview
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const SeriesDetails = useSelector((store) => store.seriesInfo?.SeriesDetails);
  const SeriesCredits = useSelector((store) => store.seriesInfo?.SeriesCredits);
  const SeriesImages = useSelector((store) => store.seriesInfo?.SeriesImages);
  const SeriesReviews = useSelector((store) => store.seriesInfo?.SeriesReviews);
  const SeriesRec = useSelector(
    (store) => store.seriesInfo?.SeriesRecommendations
  );
  const SeriesSimilar = useSelector((store) => store.seriesInfo?.SeriesSimilar);
  const SeriesTrailer = useSelector((store) => store.seriesInfo?.SeriesTrailer);

  const {
    backdrop_path,
    poster_path,
    name,
    genres,
    created_by,
    overview,
    first_air_date,
    production_companies,
    vote_average,
    adult,
    number_of_episodes,
    seasons,
    number_of_seasons,
  } = SeriesDetails || {};
  const { cast } = SeriesCredits || {};
  const trailer = SeriesTrailer?.find((video) => video.type === "Trailer")?.key;
  const year = first_air_date?.substr(0, 4);

  const handleLoadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <Headerrr />
      {!SeriesDetails ? (
        <div>Loading...</div>
      ) : (
        <>
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
          <div className="py-24 max-w-[1420px] mx-auto ">
            <div className="grid md:grid-cols-3  lg:max-w-screen-2xl mx-auto gap-6 md:gap-16 px-8">
              <div className="justify-self-center lg:justify-self-start">
                <img
                  alt="main"
                  src={
                    poster_path
                      ? img_url + poster_path
                      : img_url + backdrop_path
                  }
                  className="md:w-96 w-44 border-2 border-white rounded-lg"
                />
              </div>
              <div className="text-gray-200 text-center lg:text-start md:col-span-2">
                <h2 className="text-4xl font-semibold mb-1">{name}</h2>
                <p className="text-xs mb-3 text-zinc-400 font-semibold">
                  Directed by {created_by && created_by[0]?.name}
                </p>
                <div className="flex text-gray-300 mb-1 justify-center lg:justify-start text-sm font-medium gap-6">
                  <p>{year}</p>
                  {adult ? <p>18+</p> : <p>PG-16</p>}
                  <p className="flex items-center justify-center gap-1">
                    Total Episodes: {number_of_episodes}
                  </p>
                </div>
                <p className="text-gray-300 mb-1 text-sm font-medium">
                  Rated {vote_average?.toFixed(1)}/10
                </p>
                <div className="flex text-gray-300 justify-center lg:justify-start text-sm mb-6 font-medium">
                  {genres?.map((a) => (
                    <span key={a?.id} className="pr-2">
                      {a?.name}
                    </span>
                  ))}
                </div>
                {trailer && (
                  <a
                    href={vid_url + trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white flex items-center mb-8 md:mb-6 md:w-fit w-full hover:bg-transparent hover:text-white border-2 border-white gap-2 justify-center font-semibold text-black px-3 py-2 rounded-full"
                  >
                    Watch Trailer <FaRegCirclePlay />
                  </a>
                )}
                <div className="mb-12">
                  <p className="text-base font-normal text-center lg:text-start w-full md:w-4/6 ">
                    {showFullText
                      ? overview
                      : `${overview?.substring(0, limit)}...`}
                  </p>
                  {isMobile && (
                    <button
                      onClick={handleLoadMore}
                      className="text-yellow-500 hover:underline"
                    >
                      {showFullText ? "Show Less \u2191" : "Load More \u2193"}
                    </button>
                  )}
                </div>
                {!isMobile && (
                  <div className="flex text-black justify-center lg:justify-start items-center gap-8">
                    {production_companies?.map((a) => (
                      <Logo
                        name={a?.name}
                        id={a?.id}
                        key={a?.id}
                        image={a?.logo_path}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-white bg-gradient-to-r pt-8 from-black to-black">
            <SeasonList
              title={`${number_of_seasons} Seasons`}
              seasons={seasons}
              seriesid={id}
            />
          </div>
          <CastList cast={cast} movie={name} />
          <ReviewList movieReviews={SeriesReviews} movie={name} />
          <ImageList movieImages={SeriesImages} movie={name} />
          <div className="text-white bg-gradient-to-r from-black to-black">
            <SeriesList
              title={`Series recommendations for ${name}`}
              series={SeriesRec}
            />
          </div>
          <div className="text-white bg-gradient-to-r from-black to-black">
            <SeriesList
              title={`Similar Series for ${name}`}
              series={SeriesSimilar}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default SeriesInfoPage;
