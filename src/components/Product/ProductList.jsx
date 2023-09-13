import { useState, useEffect } from "react";
import axios from "axios";
import ProductBox from "./ProductBox";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:8000/products/?_start=0&_end=12", { cancelToken: source.token })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Axios request aborted.");
        } else {
          console.error(error);
        }
      });
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="product-list">
      {products &&
        products.map((product) => {
          return <ProductBox key={product.id} product={product} />;
        })}
    </div>
  );
};

export default ProductList;
