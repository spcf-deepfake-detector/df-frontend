import { createBrowserRouter, RouterProvider } from "react-router";

// Components
import App from "../App.jsx";
import UploadPage from "../pages/UploadPage.jsx";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <UploadPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
