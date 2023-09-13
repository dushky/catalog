import { useRouteLoaderData } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const data = useRouteLoaderData("product-detail");
  return <div>{data.name}</div>;
};

export async function loader({ request, params }) {
  const id = params.productId;

  try {
    const response = await axios.get("http://localhost:8000/products/" + id);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default ProductDetail;
