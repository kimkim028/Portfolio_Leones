import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About_me from "./Pages/About_me";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Certificate from "./Pages/Certificate";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutme",
        element: <About_me />,
      },
      {
        path: "certificate",
        element: <Certificate />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
