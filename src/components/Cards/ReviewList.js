import ReviewCard from "./ReviewCard";

const ReviewList = ({ movie, movieReviews }) => {
  return (
    <div className="py-4 px-4 bg-gradient-to-r from-black to-black">
      <div className=" mb-4">
        <h2 className="text-2xl md:text-2xl font-bold text-white mb-10">
          Reviews of {movie}
        </h2>
      </div>
      <div className="flex overflow-x-auto no-scrollbar  md:gap-8 py-4 px-1">
        <div className="flex w-full gap-2  md:gap-8">
          {movieReviews?.length === 0 ? (
            <p className=" text-white mb-10 justify-center items-center max-w-full mx-auto text-xl text-center">
              No reviews available
            </p>
          ) : (
            movieReviews?.map((a) => (
              <ReviewCard
                key={a?.id}
                author={a?.author}
                content={a?.content}
                image={a?.author_details?.avatar_path}
                path={a?.url}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
