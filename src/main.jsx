import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Catalog />,
        id: "catalog",
      },
      {
        path: "/:productId",
        id: "product-detail",
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
