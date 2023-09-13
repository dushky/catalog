import { useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/Product/ProductList";
import { useEffect } from "react";

const Catalog = () => {
  const data = useRouteLoaderData("catalog");


  return (
    <>
      <ProductList/>
    </>
  );
};

export async function loader() {
  try {
    const productsResponse = await axios.get("http://localhost:8000/products/");
    const categoriesResponse = await axios.get(
      "http://localhost:8000/categories/"
    );

    if (productsResponse.status === 200 && categoriesResponse.status === 200) {
      const mergedData = {
        products: productsResponse?.data,
        categories: categoriesResponse?.data,
      };

      return mergedData;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default Catalog;
