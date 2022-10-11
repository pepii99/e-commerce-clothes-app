import {
  ProductStyle,
  ProductInfo,
  ProductImage,
} from '../styles/product.style';
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <ProductStyle>
      <Link href={`/product/${product.slug}`}>
        <ProductImage>
          <img src={product.image.data.attributes.formats.small.url} alt='' />
        </ProductImage>
      </Link>
      <ProductInfo>
        <h2>{product.title}</h2>
        <h3>{product.price}$</h3>
      </ProductInfo>
    </ProductStyle>
  );
};

export default Product;
