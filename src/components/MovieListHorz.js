import MovieCardHorz from "./Cards/MovieCardHorz";

const MovieListHorz = ({ title, movies }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold w-full px-14 py-6 pb-8 ">{title}</h1>
      </div>
      <div className=" flex overflow-x-scroll px-14  no-scrollbar pb-12 ">
        <div className="flex gap-4 ">
          {movies ? (
            movies.map((movie) => (
              <MovieCardHorz key={movie.id} movie={movie} />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieListHorz;
