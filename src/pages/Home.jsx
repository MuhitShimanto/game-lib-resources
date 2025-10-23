import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import PopularGames from "../components/PopularGames/PopularGames";

const Home = () => {
  const games = useLoaderData();
  return (
    <>
      <main className="space-y-12 mb-12">
        <Banner />
        <PopularGames games={games} className="max-w-[1600px] mx-auto" />
      </main>
    </>
  );
};

export default Home;
