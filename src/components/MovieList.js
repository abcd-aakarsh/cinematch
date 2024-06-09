import MovieCard from "./Cards/MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold w-full px-14 py-6">{title}</h1>
      </div>
      <div className=" flex overflow-x-scroll px-14  no-scrollbar pb-12 ">
        <div className="flex gap-5">
          {movies ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;
