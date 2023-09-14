import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductBox from "./ProductBox";
import "./ProductList.css";
import FilterContext from "../../store/filter-context";

const ProductList = () => {
  const [products, setProducts] = useState();
  const ctx = useContext(FilterContext);
  useEffect(() => {
    const source = axios.CancelToken.source();
    let categoryQuery = "";
    ctx.filteredCategories.map((fc) => {
      categoryQuery = `${categoryQuery}&category_id=${fc}`;
    });
    const url = `http://localhost:8000/products/?_start=0&_end=20${categoryQuery}`;

    axios
      .get(url, {
        cancelToken: source.token,
      })
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
  }, [ctx.filteredCategories]);

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
