import ReactDOM from "react-dom";
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

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <RouterProvider router={router} />,

document.getElementById('root')
);
