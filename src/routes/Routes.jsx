import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/errorPages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AllGames from "../pages/AllGames";
import GameDetails from "../pages/GameDetails";
import GameNotFound from "../pages/errorPages/GameNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch("/json/popularGames.json");
          return res.json();
        },
      },
      {
        path: "all-games",
        children: [
          {
            index: true,
            element: <AllGames />,
            loader: async () => {
              const res = await fetch("/json/games.json");
              return res.json();
            },
          },
          {
            path: ":gameTitle",
            element: <GameDetails />,
            loader: async () => {
              const res = await fetch("/json/games.json");
              return res.json();
            },
          },
          {
            path: "*",
            element: <GameNotFound />,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
