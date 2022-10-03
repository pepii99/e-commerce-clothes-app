import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';

const ProductDetails = () => {
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
  const productInfo = results.data;

  console.log(productInfo);

  return (
    <div>
      <div>
        <img src='' alt='' />
      </div>
      <div>
        <h3>Title</h3>
        <p>Description</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>Plus</button>
        <p>0</p>
        <button>Minus</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
