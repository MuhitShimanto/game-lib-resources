import { FaArrowRight } from "react-icons/fa";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router";
import { useMemo, useState } from "react";

const PopularGames = ({ title, games, className, seeMore = false }) => {
  const [sortOrder, setSortOrder] = useState("desc");
  const sortedAndSlicedGames = useMemo(() => {
    const gamesToSort = [...games];
    gamesToSort.sort((a, b) => {
      const ratingA = parseFloat(a?.ratings) || 0;
      const ratingB = parseFloat(b?.ratings) || 0;

      if (sortOrder === "desc") {
        return ratingB - ratingA;
      } else {
        return ratingA - ratingB;
      }
    });

    return gamesToSort;
  }, [games, sortOrder]);
  return (
    <>
      <div className={`flex flex-col gap-9 ${className}`}>
        <div className="mt-6 poppins flex flex-col md:flex-row justify-between items-center">
          {/* Title */}
          <div className="poppins mb-4 md:mb-0 space-y-3">
            <h1 className="text-3xl font-bold text-primary">{title}</h1>
            <div id="sorting-container">
              <div className="flex gap-2">
                <button
                  className={`btn btn-sm ${
                    sortOrder === "desc" ? "btn-primary" : "btn-ghost"
                  }`}
                  onClick={() => setSortOrder("desc")}
                >
                  High to Low
                </button>
                <button
                  className={`btn btn-sm ${
                    sortOrder === "asc" ? "btn-primary" : "btn-ghost"
                  }`}
                  onClick={() => setSortOrder("asc")}
                >
                  Low to High
                </button>
              </div>
            </div>
          </div>

          {/* Sort Buttons Container */}
          <div className="flex flex-col gap-2 items-center">
            {/* Conditional "See More" Link */}
            {seeMore && (
              <Link
                to="/all-games"
                className="flex items-center gap-2 text-lg hover:text-primary cursor-pointer ml-4 animate-bounce"
              >
                See more <FaArrowRight />
              </Link>
            )}
          </div>
        </div>

        {/* Grid of Game Cards */}
        {sortedAndSlicedGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedAndSlicedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          // no games are available
          <p className="text-center text-neutral col-span-full">
            No games to display.
          </p>
        )}
      </div>
    </>
  );
};

export default PopularGames;
