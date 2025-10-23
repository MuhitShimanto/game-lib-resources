import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import GameCardsContainer from "../components/GameCardsContainer/GameCardsContainer";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  const popularGames = useLoaderData();
  return (
    <>
      <main className="space-y-12">
        <Banner />
        <GameCardsContainer title={"Popular Games"} games={popularGames} seeMore={true} className="max-w-[1600px] mx-auto px-6" />
        <Newsletter className=""/>
      </main>
    </>
  );
};

export default Home;
