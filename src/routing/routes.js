import React from 'react';

const Login = React.lazy(() => import("../pages/login/login"));
const Home = React.lazy(() => import("../pages/home/home"));
const Signup = React.lazy(() => import("../pages/register/register"));


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
    }
]