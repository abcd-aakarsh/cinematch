const VideoTitle = () => {
  return (
    <>
      <div className="py-44 px-8   md:pt-72 md:px-16 lg:px-24 lg:pt-64 absolute bg-gradient-to-b lg:bg-gradient-to-t text-gray-200 from-black text-center lg:text-start  w-full lg:6/12 h-[85vh] md:h-[100vh] ">
        <h1 className="text-3xl   font-semibold mb-8 sm:text-4xl  md:text-5xl lg:text-5xl lg:text-start  text-center sm:font-bold sm:mb-10  ">
          Find Your Perfect Match in Movies
        </h1>
        <p className=" text-base md:text-lg lg:text-xl mb-12 w-full md:w-6/12 md:mx-auto lg:mx-1 lg:w-6/12 ">
          Welcome to CineMatch! Explore over 20,000 movies and tv series, from
          now playing to upcoming and popular releases. Discover your next
          favorite film effortlessly.
        </p>
        <div className="lg:w-6/12 ">
          <button className="bg-gradient-to-l from-gray-700 to-red-700  font-semibold px-6 text-lg py-2 rounded-full">
            Discover Now
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
