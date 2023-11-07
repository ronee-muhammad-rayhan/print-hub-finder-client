import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import Home from "../pages/Home/Home";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddService from "../pages/AddService/AddService";
import NotFound404 from "../pages/ErrorPage/NotFound404";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ManageServices from "../pages/ManageServices/ManageServices";
import MySchedules from "../pages/MySchedules/MySchedules";

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
                path: "services",
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5003/services/${params.id}`)
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
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "manage-services",
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path: "my-schedules",
                element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
            },
        ]
    },
]);