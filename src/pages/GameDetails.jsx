import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import GameNotFound from "./errorPages/GameNotFound";
import { Helmet } from "react-helmet-async";

const GameDetails = () => {
  const paramObj = useParams();
  const games = useLoaderData();
  const gameTitle = paramObj.gameTitle;
  const game = games.find((game) => game.title === gameTitle);
  if (!game) {
    return <GameNotFound />;
  }
  const { category, coverPhoto, description, developer, downloadLink, title } =
    game;
  return (
    <>
      <Helmet>
        <title>GameHub | {title}</title>
      </Helmet>
      <div className="">
        <div id="cover" className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center font-bold text-[75px] md:text-[100px] lg:text-[150px]">
            {title}
          </div>
          <img
            src={coverPhoto}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div id="info" className="mb-12 px-6 max-w-[1600px] mx-auto">
          {/* Tags */}
          <h2 className="mt-3 badge bg-primary text-primary-content">
            {category}
          </h2>
          {/* Description */}
          <h1 className="mt-9 text-primary font-bold text-4xl">Description</h1>
          <p className="mt-3 text-white/75 font-normal text-lg">
            {description}
          </p>
          {/* Developer */}
          <h1 className="mt-9 text-primary font-bold text-4xl">Developer</h1>
          <p className="mt-3 text-white/75 font-normal text-lg">{developer}</p>
          {/* Download */}
          <Link
            to={downloadLink}
            className="mt-9 py-2 px-4 bg-primary text-primary-content inline-block rounded-lg font-medium text-lg hover:bg-primary/80"
          >
            Download
          </Link>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
