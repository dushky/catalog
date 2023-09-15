import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Review from "./Review";
import "./ReviewList.css";

const ReviewList = ({ productId }) => {
  const [reviews, setReviews] = useState<any[]>([]);

//fetching product reviews
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
    reviews.length > 0 && (
      <div className="review-list">
        <h3 className="title">Reviews</h3>

        {reviews?.map((review) => {
          return <Review key={review?.id} review={review} />;
        })}
      </div>
    )
  );
};

ReviewList.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ReviewList;
