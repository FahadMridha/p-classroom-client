import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Blog from "../pages/blog/Blog";
import CourseDetails from "../pages/Courses/CourseDetails";
import CourseMoreDetails from "../pages/Courses/CourseMoreDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/error/ErrorPage";
import Faq from "../pages/FAQ/Faq";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: "",
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);
