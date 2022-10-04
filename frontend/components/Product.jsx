import { ProductStyle } from '../styles/product.style';
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <ProductStyle>
      <Link href={`/product/${product.slug}`}>
        <div>
          <img src={product.image.data.attributes.formats.small.url} alt='' />
        </div>
      </Link>

      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </ProductStyle>
  );
};

export default Product;
