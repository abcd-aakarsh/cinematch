import SeriesCard from "./Cards/SeriesCard";

const SeriesList = ({ title, series }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold w-full px-14 py-6 ">{title}</h1>
      </div>
      <div className=" flex overflow-x-scroll px-14  no-scrollbar pb-12 ">
        <div className="flex gap-5">
          {series ? (
            series.map((series) => (
              <SeriesCard key={series.id} series={series} />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default SeriesList;
