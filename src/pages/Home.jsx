import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import PopularGames from "../components/PopularGames/PopularGames";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  const games = useLoaderData();
  return (
    <>
      <main className="space-y-12">
        <Banner />
        <PopularGames games={games} className="max-w-[1600px] mx-auto px-6" />
        <Newsletter className=""/>
      </main>
    </>
  );
};

export default Home;
