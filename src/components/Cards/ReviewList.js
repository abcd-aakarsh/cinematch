import ReviewCard from "./ReviewCard";

const ReviewList = ({ movie, movieReviews }) => {
  return (
    <div className="p-4 bg-gradient-to-r from-black to-black">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white mb-10">
          Reviews of {movie}
        </h2>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-8 pb-4 pt-4 px-4">
        <div className="flex w-full gap-8">
          {movieReviews?.map((a) => (
            <ReviewCard
              key={a?.id}
              author={a?.author}
              content={a?.content}
              image={a?.author_details?.avatar_path}
              path={a?.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
