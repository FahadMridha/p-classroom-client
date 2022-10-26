import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/aboutUser/Login";
import SignUp from "../auth/aboutUser/SignUp";
import Main from "../layout/main/Main";
import Blog from "../pages/blog/Blog";
import Checkout from "../pages/Courses/Checkout";
import CourseMoreDetails from "../pages/Courses/CourseMoreDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/error/ErrorPage";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("https://classroom-server-zeta.vercel.app/courses"),
      },

      {
        path: "/courses/:id",
        element: <CourseMoreDetails />,
        loader: ({ params }) =>
          fetch(
            `https://classroom-server-zeta.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://classroom-server-zeta.vercel.app/checkout/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
