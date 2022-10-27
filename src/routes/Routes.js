import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Checkout from "../components/Checkout";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
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
        loader: () => fetch('http://localhost:5000/courses')
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
        loader: ({ params }) => fetch(`http://localhost:5000/coursedetails/${params.id}`)
    },
    {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)

    },
    ]
}])