import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EventDetails from "../Components/EventDetails/EventDetails";

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
                element: <EventDetails></EventDetails>,
                loader: () => fetch('/services.json'),
            }
        ]
    },
]);

export default router;