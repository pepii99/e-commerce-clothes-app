import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import {
  Details,
  ProductInfo,
  Quantity,
  Buy,
  ProductDescription,
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
  if (error) return <p>Oh no... {error}</p>;

  //Extract data
  const productObject = data.products.data[0].attributes;

  const { title, description, image, color, price } = productObject;

  return (
    <>
      <Details>
        <ProductDescription>
          <h3>Materials and Origin</h3>
          <h5>Materials</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quos eaque, vitae reprehenderit asperiores fugiat.
          </p>
          <h5>Origin</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            ratione optio beatae mollitia id corporis dolore quibusdam! Aliquid,
            laboriosam accusamus.
          </p>
          <a href='https://www.lipsum.com/'>View more</a>
        </ProductDescription>
        <img src={image.data.attributes.formats.medium.url} alt='{title}' />
        <ProductInfo>
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            dicta repudiandae? Ducimus eaque architecto odio!
          </p>
          <p id='color'>{color}</p>
          <p id='price'>{price}$</p>
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
    </>
  );
};

export default ProductDetails;
