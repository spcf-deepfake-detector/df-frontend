import { createBrowserRouter, RouterProvider } from "react-router";

// Components
import App from "../App.jsx";
import LandingPage from "../pages/LandingPage.jsx";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
