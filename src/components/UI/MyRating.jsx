import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";

export default function MyRating({ rating }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="read-only" value={rating} readOnly />
    </Box>
  );
}

MyRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
