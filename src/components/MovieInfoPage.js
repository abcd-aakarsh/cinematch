import { useParams } from "react-router-dom";

import { FaRegCirclePlay } from "react-icons/fa6";
import { useMovieInfo } from "../customHooks/useMovieInfo";
import { useSelector } from "react-redux";
import { img_url, img_urlb } from "../utils/constant";
import { FcAlarmClock } from "react-icons/fc";

import Logo from "./Cards/Logo";
import CastList from "./Cards/CastList";
import ReviewList from "./Cards/ReviewList";
import ImageList from "./Cards/ImageList";

import MovieList from "./MovieList";
import { useEffect } from "react";

const MovieInfoPage = () => {
  const { id } = useParams();

  useMovieInfo(id);
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
  console.log(MovieSimilar);

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
  const year = release_date?.substr(0, 4);
  const isDateInPast = (release_date) => {
    const inputDate = new Date(release_date);

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return inputDate < today;
  };

  const director = crew && crew.find((person) => person.job === "Director");
  console.log(MovieDetails);
  return (
    <>
      {!MovieDetails ? (
        <div>"Loading......"</div>
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
          <div className="py-24 max-w-[1420px] mx-auto">
            <div className="grid grid-cols-3 gap-16 px-8">
              <div className="">
                <img
                  alt="main"
                  src={img_url + poster_path}
                  className="w-96 border-2 border-white rounded-lg"
                />
              </div>
              <div className="text-white col-span-2">
                <h2 className="text-4xl font-semibold mb-1">
                  {title} {!isDateInPast(release_date) && "(Releasing Soon)"}
                </h2>
                <p className="text-xs mb-4 text-zinc-400 font-semibold">
                  Directed by {director?.name}
                </p>
                <div className="flex text-gray-300 mb-1 text-sm font-medium gap-6">
                  <p>{year}</p>
                  <p className="flex items-center justify-center gap-1">
                    <FcAlarmClock />
                    {`${(runtime - (runtime % 60)) / 60}h ${runtime % 60}m`}
                  </p>
                  {adult ? <p>18+</p> : <p>PG-16</p>}
                </div>
                <p className=" text-gray-300 mb-1 text-sm font-medium gap-6">
                  Rated {vote_average?.toFixed(1)}/10
                </p>
                <div className="flex text-gray-300 text-sm mb-6 font-medium">
                  {genres?.map((a) => (
                    <span key={a?.id} className="pr-2">
                      {a?.name}
                    </span>
                  ))}
                </div>
                <button className="bg-white flex items-center mb-6 hover:bg-transparent hover:text-white border-2 border-white gap-2 justify-center font-semibold text-black px-3 py-2 rounded-full">
                  Watch Trailer <FaRegCirclePlay />
                </button>
                <p className="text-base font-normal w-4/6 mb-12">{overview}</p>
                <div className="flex gap-6 mb-12">
                  <p>
                    <span className="text-red-500">Budget</span> : $
                    {(budget / 1000000).toFixed(2)} Million USD
                  </p>

                  <p>
                    <span className="text-green-500">Revenue</span> : $
                    {(revenue / 1000000).toFixed(2)} Million USD
                  </p>
                </div>
                <div className="flex  text-black  items-center gap-8">
                  {production_companies?.map((a) => (
                    <Logo name={a?.name} id={a?.id} image={a?.logo_path} />
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
              title={`Movie recommendations for ${title} `}
              movies={MovieRec}
            />
          </div>
          <div className="text-white bg-gradient-to-r from-black to-black">
            <MovieList
              title={`Similar Movies for ${title} `}
              movies={MovieSimilar}
            />
          </div>
        </>
      )}
    </>
  );
};
export default MovieInfoPage;
