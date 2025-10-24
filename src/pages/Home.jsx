import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import GameCardsContainer from "../components/GameCardsContainer/GameCardsContainer";
import Newsletter from "../components/Newsletter/Newsletter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const popularGames = useLoaderData();
  
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main className="space-y-9">
        <Banner />
        <div className="max-w-[1600px] mx-auto px-6">
          
          <GameCardsContainer
            title="Popular Games"
            games={popularGames}
            seeMore={true}
          />
        </div>
        <Newsletter />
      </main>
    </>
  );
};

export default Home;
