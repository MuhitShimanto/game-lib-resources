import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "sign-up",
                element: <Signup/>
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
])

export default router;