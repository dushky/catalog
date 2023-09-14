import React from "react";
import PropTypes from "prop-types";
import "./Review.css";
import MyRating from "../UI/MyRating";

const Review = ({ review }) => {
  return (
    <div className="product-review">
      <h3>{review?.user} said:</h3>
      <p>{review?.comment}</p>
      <MyRating rating={review?.rating} />
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};
export default Review;
