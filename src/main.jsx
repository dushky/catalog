import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
import { loader as productDetailLoader } from "./pages/ProductDetail";
import { loader as catalogLoader } from "./pages/Catalog";

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
        loader: catalogLoader,
      },
      {
        path: ":productId",
        id: "product-detail",
        loader: productDetailLoader,
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
