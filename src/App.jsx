import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";

import RootLayout from "./components/RootLayout.jsx";
import MealItems from "./pages/meals/MealItems.jsx";

export default function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <Home />

        },

        {
          path: "about",
          element: <About />
        },

        {
          path: 'meal-items/:category',
          element: <MealItems />
        }

      ]
    },





  ]);


  return <RouterProvider router={router} />
}