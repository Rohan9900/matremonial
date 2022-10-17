import React from 'react';

const Login = React.lazy(() => import("../pages/login/login"));
const Home = React.lazy(() => import("../pages/home/home"));
const Signup = React.lazy(() => import("../pages/register/register"));
const Listing = React.lazy(() => import("../pages/listing/listing"));
const Profile = React.lazy(() => import("../pages/profile/profile"));
const AddProfile = React.lazy(() => import("../pages/addprofile/addProfile"));


export const RoutingRoutes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Signup />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/list",
        element: <Listing />
    },
    {
        path: "/updateprofile",
        element: <AddProfile />
    },
    {
        path: "/profile/:id",
        element: <Profile />
    }
]