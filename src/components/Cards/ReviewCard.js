import { img_pp } from "../../utils/constant";
import pfp from "../../assets/pfp.jpg";
const ReviewCard = ({ author, image, content, path }) => {
  const truncateContent = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const truncatedContent = truncateContent(content, 200);

  return (
    <div className="border-2 w-11/12 md:w-1/4 p-6 py-4 border-gray-700 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105 flex-shrink-0">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          <img
            src={!image ? pfp : img_pp + image}
            className="w-full h-full rounded-full transition-all duration-150 hover:border-2 border-red-200 object-cover"
            alt="review"
          />
        </div>
        <p className="text-base md:text-lg text-white font-semibold">
          {author}
        </p>
      </div>
      <p className="text-sm text-gray-300 font-normal mb-4">
        {truncatedContent}
      </p>
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-red-500 font-medium hover:text-red-300 transition-colors duration-150"
      >
        View full review
      </a>
    </div>
  );
};

export default ReviewCard;
