import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Page1 from "./pages/home/child-pages/Page1.jsx";
import Page2 from "./pages/home/child-pages/Page2.jsx";

export default function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "page1",
          element: <Page1 />
        },
        {
          path: "page2",
          element: <Page2 />
        }
      ]
    },
    {
      path: "about",
      element: <About />
    }




  ]);


  return <RouterProvider router={router} />
}