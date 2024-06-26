import { useParams } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useMovieInfo } from "../customHooks/useMovieInfo";
import { useSelector } from "react-redux";
import { img_url, img_urlb, vid_url } from "../utils/constant";
import { FcAlarmClock } from "react-icons/fc";
import Logo from "./Cards/Logo";
import CastList from "./Cards/CastList";
import ReviewList from "./Cards/ReviewList";
import ImageList from "./Cards/ImageList";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import Headerrr from "./Headerrr";
import Footer from "./Footer";

const MovieInfoPage = () => {
  const { id } = useParams();
  useMovieInfo(id);
  const [showFullText, setShowFullText] = useState(false);
  const limit = 150; // Character limit for the overview
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

  const MovieDetails = useSelector((store) => store.movieInfo?.MovieDetails);
  const MovieCredits = useSelector((store) => store.movieInfo?.MovieCredits);
  const MovieReviews = useSelector((store) => store.movieInfo?.MovieReviews);
  const MovieImages = useSelector((store) => store.movieInfo?.MovieImages);
  const MovieRec = useSelector(
    (store) => store.movieInfo?.MovieRecommendations
  );
  const MovieSimilar = useSelector((store) => store.movieInfo?.MovieSimilar);
  const MovieTrailer = useSelector((store) => store.movieInfo?.MovieTrailer);

  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    runtime,
    adult,
    release_date,
    genres,
    budget,
    revenue,
    production_companies,
    vote_average,
  } = MovieDetails;

  const { crew, cast } = MovieCredits;
  const trailer = MovieTrailer?.find((video) => video.type === "Trailer")?.key;
  const year = release_date?.substr(0, 4);

  const isDateInPast = (release_date) => {
    const inputDate = new Date(release_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate < today;
  };

  const director = crew?.find((person) => person.job === "Director");
  const handleLoadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      {!MovieDetails ? (
        <div>Loading...</div>
      ) : (
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
          <div className="py-24 max-w-[1420px] mx-auto ">
            <div className="grid md:grid-cols-3 max-w-screen lg:max-w-screen-2xl mx-auto gap-6 md:gap-16 px-8">
              <div className="justify-self-center lg:justify-self-start ">
                <img
                  alt="main"
                  src={img_url + poster_path}
                  className="md:w-96 w-44 border-2  border-white rounded-lg"
                />
              </div>
              <div className="text-gray-200 text-center lg:text-start md:col-span-2">
                <h2 className="text-4xl font-semibold mb-1">
                  {title} {!isDateInPast(release_date) && "(Releasing Soon)"}
                </h2>
                <p className="text-xs mb-3 text-zinc-400 font-semibold">
                  Directed by {director?.name}
                </p>
                <div className="flex text-gray-300 mb-1 justify-center lg:justify-start text-sm font-medium gap-6">
                  <p>{year}</p>
                  <p className="flex items-center justify-center gap-1">
                    <FcAlarmClock />
                    {`${Math.floor(runtime / 60)}h ${runtime % 60}m`}
                  </p>
                  {adult ? <p>18+</p> : <p>PG-16</p>}
                </div>
                <p className="text-gray-300 mb-1 text-sm font-medium">
                  Rated {vote_average?.toFixed(1)}/10
                </p>
                <div className="flex text-gray-300 justify-center lg:justify-start text-sm mb-6 font-medium">
                  {genres?.map((genre) => (
                    <span key={genre.id} className="pr-2">
                      {genre.name}
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

                <div className="flex gap-2 text-sm md:gap-6 mb-14 md:mb-12">
                  <p>
                    <span className="text-red-500">Budget</span>: $
                    {(budget / 1000000).toFixed(2)}Million USD
                  </p>
                  <p>
                    <span className="text-green-500">Revenue</span>: $
                    {(revenue / 1000000).toFixed(2)} Million USD
                  </p>
                </div>
                <div className="flex text-black justify-center lg:justify-start items-center gap-8">
                  {production_companies?.map((company) => (
                    <Logo
                      key={company.id}
                      name={company.name}
                      id={company.id}
                      image={company.logo_path}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <CastList cast={cast} movie={title} />
          <ReviewList movieReviews={MovieReviews} movie={title} />
          <ImageList movieImages={MovieImages} movie={title} />
          <div className="text-white bg-gradient-to-r from-black to-black">
            <MovieList
              title={`Movie recommendations for ${title}`}
              movies={MovieRec}
            />
          </div>
          <div className="text-white bg-gradient-to-r from-black to-black">
            <MovieList
              title={`Similar Movies for ${title}`}
              movies={MovieSimilar}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default MovieInfoPage;
