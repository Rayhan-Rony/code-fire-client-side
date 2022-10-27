import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Checkout from "../components/Checkout";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import Error from "../components/Error";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [{
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('https://code-fire-serrver.vercel.app/courses')
    }, {
        path: '/faq',
        element: <Faq></Faq>
    }, {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '/coursedetails/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://code-fire-serrver.vercel.app/coursedetails/${params.id}`)
    },
    {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`https://code-fire-serrver.vercel.app/checkout/${params.id}`)

    },
    {
        path: '/login',
        element: <Login></Login>,


    },
    {
        path: '/register',
        element: <Register></Register>,


    },
    ]
}])