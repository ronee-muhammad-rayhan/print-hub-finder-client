import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import Home from "../pages/Home/Home";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddService from "../pages/AddService/AddService";
import NotFound404 from "../pages/ErrorPage/NotFound404";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound404></NotFound404>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "add-a-service",
                element: <AddService></AddService>
            }
        ]
    },
]);