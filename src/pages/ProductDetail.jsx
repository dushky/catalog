import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ProductDetail.css";
import MySnackbar from "../components/UI/MySnackbar";
import ReviewList from "../components/Review/ReviewList";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

// fetching product data
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:8000/products/" + productId, {
        cancelToken: source.token,
      })
      .then((response) => {
        setProduct(response.data);
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
    <>
      <div className="product-detail">
        <div className="image">
          <img src={product?.image_url} alt={product?.name} />
        </div>
        <div className="info">
          <h2>{product?.name}</h2>
          <p>{product?.price}€</p>
          <p>{product?.description}</p>
          <MySnackbar
            buttonText="add to cart"
            messageText="Successfully added to cart!"
          />
        </div>
      </div>

      <ReviewList productId={productId} />
    </>
  );
};

export default ProductDetail;
