const VideoTitle = () => {
  return (
    <>
      <div className="pt-60 px-16 absolute bg-gradient-to-r from-black w-full h-[90vh] text-white">
        <h1 className="text-5xl font-bold mb-10  ">
          Find Your Perfect Match in Movies
        </h1>
        <p className="text-lg mb-12 w-6/12">
          Welcome to CineMatch! Explore over 20,000 movies and tv series, from
          now playing to upcoming and popular releases. Discover your next
          favorite film effortlessly.
        </p>
        <div>
          <button className="bg-gradient-to-l from-gray-700 to-red-700 text-white font-semibold px-6 text-lg py-2 rounded-full">
            Discover Now
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
