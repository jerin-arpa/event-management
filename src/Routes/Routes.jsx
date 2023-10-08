import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EventDetails from "../Components/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import Speakers from "../Pages/Speakers/Speakers";
import Gallery from "../Pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/services.json'),
            },
            {
                path: "/eventDetails/:id",
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch('/services.json'),
            },
            {
                path: "/speakers",
                element: <PrivateRoute><Speakers></Speakers></PrivateRoute>,
                loader: () => fetch('/speakers.json'),
            },
            {
                path: "/gallery",
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ]
    },
]);

export default router;