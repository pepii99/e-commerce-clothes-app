import { ProductStyle } from '../styles/product.style';

const Product = ({ product }) => {
  return (
    <ProductStyle>
      <div>
        <img src={product.image.data.attributes.formats.small.url} alt='' />
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </ProductStyle>
  );
};

export default Product;
