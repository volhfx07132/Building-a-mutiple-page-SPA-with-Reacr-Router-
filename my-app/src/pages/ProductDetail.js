import { Route, useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {productId} = useParams();

  console.log(productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{productId}</p>
    </section>
  );
};

export default ProductDetail;
