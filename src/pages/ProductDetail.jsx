import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState();
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

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:8000/reviews?product_id=" + productId, {
        cancelToken: source.token,
      })
      .then((response) => {
        setReviews(response.data);
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
        <h2>{product?.name}</h2>
        <img src={product?.image_url} alt={product?.name} />
        <p>{product?.price}€</p>
        <p>{product?.description}</p>
      </div>

      <div className="product-reviews">
        {reviews?.map((review) => {
          return <div key={review.id} className="product-review">
            <h3>{review.user}</h3>
            <p>{review.rating}/5</p>
            <p>{review.comment}</p>
          </div>;
        })}
      </div>
    </>
  );
};

export default ProductDetail;
