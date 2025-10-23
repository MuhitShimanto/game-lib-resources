import GameCard from "../GameCard/GameCard";

const PopularGames = ({ games, className }) => {
  return (
    <>
      <div className={`flex flex-col gap-9 ${className}`}>
        <h1 className="mt-6 text-primary font-bold text-4xl poppins">
          Popular Games
        </h1>
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
