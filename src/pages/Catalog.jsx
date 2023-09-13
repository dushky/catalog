import { json, useRouteLoaderData } from "react-router-dom";
import axios from "axios";

const Catalog = () => {
  const data = useRouteLoaderData("catalog");
  console.log(data.products);
  return <div>{data.products[0].name}</div>;
};

export async function loader({ request, params }) {
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
