import { useLoaderData } from 'react-router';
import GameCardsContainer from '../components/GameCardsContainer/GameCardsContainer';

const AllGames = () => {
  const games = useLoaderData();
  return (
    <>
      <main className="mt-12 space-y-12">
        <GameCardsContainer title={"All Games"} games={games} className="max-w-[1600px] mx-auto px-6" />
      </main>
    </>
  )
}

export default AllGames