import PropTypes from "prop-types";
import "./ProductBox.css";
import { Link } from "react-router-dom";

const ProductBox = ({ product }) => {
  return (
    <Link to={`/${product.id}`}>
      <div className="product-box">
        <img src={product.image_url} alt={product.name} />
        <h3>{product.name}</h3>
        <span>{product.price}€</span>
      </div>
    </Link>
  );
};

ProductBox.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductBox;
