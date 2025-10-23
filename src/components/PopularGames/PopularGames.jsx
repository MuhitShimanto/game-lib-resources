import { FaArrowRight } from "react-icons/fa";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router";

const PopularGames = ({ games, className }) => {
  return (
    <>
      <div className={`flex flex-col gap-9 ${className}`}>
        <div className="mt-6 poppins flex justify-between items-center">
          <h1 className="text-primary font-bold text-4xl">Popular Games</h1>
          <Link to="all-games" className="animate-bounce flex items-center gap-2 text-lg hover:text-primary cursor-pointer">See more <div className=""><FaArrowRight/></div></Link>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularGames;
