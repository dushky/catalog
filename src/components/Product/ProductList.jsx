import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import ProductBox from "./ProductBox";
import "./ProductList.css";
import FilterContext from "../../store/filter-context";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const ctx = useContext(FilterContext);
  const totalProducts = useRef(0);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let categoryQuery = "";
    ctx.filteredCategories.map((categoryId) => {
      categoryQuery = `${categoryQuery}&category_id=${categoryId}`;
    });

    const url = `http://localhost:8000/products/?_start=0&_end=${
      productCount + 20
    }${categoryQuery}`;

    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then((response) => {
        const data = response.data;
        totalProducts.current = response.headers["x-total-count"];
        setProducts(data);
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
  }, [ctx.filteredCategories, productCount]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        productCount < totalProducts.current - 20 //prevent loading of non existing records
      ) {
        //when user is near bottom of the page
        setProductCount(productCount + 20);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [products]);

  return (
    <div className="product-list">
      {products &&
        products.map((product) => {
          return <ProductBox key={product.id} product={product} />;
        })}

      {/*Thisfixes layout of last row of products*/}
      <div className="product-box" style={{ visibility: "hidden" }}></div>
      <div className="product-box" style={{ visibility: "hidden" }}></div>
      <div className="product-box" style={{ visibility: "hidden" }}></div>
      <div className="product-box" style={{ visibility: "hidden" }}></div>
      <div className="product-box" style={{ visibility: "hidden" }}></div>
    </div>
  );
};

export default ProductList;
