import { useQuery } from 'urql';
import { GET_PRODUCTS_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import { Gallery } from '../../styles/gallery.style';
import Product from '../../components/Product';

const ProductDetails = () => {
  //Fetch slug
  const { query } = useRouter();

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCTS_QUERY,
    variables: { type: query.slug },
  });

  const { data, fetching, error } = results;

  // //Checks for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  // //Extract data
  const productObject = data.products.data;
  console.log(productObject);
  return (
    <Gallery>
      {productObject.map((product) => (
        <Product key={product.attributes.slug} product={product.attributes} />
      ))}
    </Gallery>
  );
};

export default ProductDetails;
