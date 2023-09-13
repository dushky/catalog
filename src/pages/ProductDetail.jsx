import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();

  return (
    <div>ProductDetail with ID {id}</div>
  )
}

export default ProductDetail