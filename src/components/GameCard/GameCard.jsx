import { FaStar } from "react-icons/fa";
import SpotlightCard from "../../animations/SpotlightCard";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  const {
    title,
    category,
    coverPhoto,
    description,
    developer,
    ratings,
  } = game;
  return (
    <Link to={`/all-games/${title}`} className="hover:scale-103 transition ease-in-out duration-150 cursor-pointer">
      <SpotlightCard className="p-0" spotlightColor="rgba(255, 255, 255, 0.25)">
        <div className="flex flex-col">
          <div id="thumbnail" className="relative h-[400px] overflow-hidden">
            <img src={coverPhoto} alt={title} className="h-full object-cover" />
            <button className="absolute top-2 right-2 py-1 px-3 bg-primary/95 text-primary-content font-medium text-sm rounded-2xl shadow-sm">
              {category}
            </button>
          </div>
          <div id="info" className="py-3 px-6 space-y-2">
            {/* Title */}
            <div className="font-semibold text-3xl">{title}</div>
            {/* Developer */}
            <div className="mt-[-5px] text-md text-white/65 flex justify-between">
              <div>by <span className="font-medium text-primary">{developer}</span></div>
              <div className="flex gap-1 items-center">{ratings} <FaStar fill="#eea000"/></div>
            </div>
            {/* Description */}
            <div className="flex-1 mt-6 mb-3 font-normal text-sm text-white/65 line-clamp-2">
              {description}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
};

export default GameCard;
