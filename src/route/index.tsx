import { createBrowserRouter } from "react-router-dom";
import Modal from "../components/modal/Modal";

import Wrapper from "../components/wrapper/Wrapper";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Pictures from "../pages/pictures/Pictures";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/watercolour",
        element: <Pictures />,
      },
      {
        path: "/acrylic",
        element: <Pictures />,
      },
      {
        path: "/phygital",
        element: <Pictures />,
      },
    ],
  },
]);
