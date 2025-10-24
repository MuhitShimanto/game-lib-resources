import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import GameCardsContainer from "../components/GameCardsContainer/GameCardsContainer";
import Newsletter from "../components/Newsletter/Newsletter";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import {ScaleLoader} from "react-spinners"

const Home = () => {
  const popularGames = useLoaderData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <div className="min-h-[92vh] flex justify-center items-center">
      <ScaleLoader color="#eea000"/>
    </div>
  }

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
