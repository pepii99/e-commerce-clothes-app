import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import {
  Details,
  ProductInfo,
  Quantity,
  Buy,
} from '../../styles/productDetails.style';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from '../../lib/context';

const ProductDetails = () => {
  //Use State
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

  //Fetch slug
  const { query } = useRouter();

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  //Checks for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  //Extract data
  const productObject = data.products.data[0].attributes;
  const { title, description, image } = productObject;

  return (
    <Details>
      <img src={image.data.attributes.formats.medium.url} alt='{title}' />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(productObject, qty)}>Add to Cart</Buy>
      </ProductInfo>
    </Details>
  );
};

export default ProductDetails;
