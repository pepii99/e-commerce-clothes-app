import Head from 'next/head';
import Link from 'next/link';
import { PRODUCT_QUERY } from '../lib/query';
import { useQuery } from 'urql';
import Product from '../components/Product';
import { Gallery } from '../styles/gallery.style';
import { HomeStyle, HomeDiv, HomeMenu } from '../styles/home.style';

export default function Home() {
  //Fetch products from Strapi
  // const [results] = useQuery({ query: PRODUCT_QUERY });
  // const { data, fetching, error } = results;

  //Checks for the data coming in
  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;
  // const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Relair.</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HomeDiv>
          <HomeStyle>
            <img
              src='https://res.cloudinary.com/dkpeivu7g/image/upload/v1665133644/pexels-yuting-gao-1557547_uae9g0.jpg'
              alt=''
            />
            <HomeMenu>
              <div>
                <Link href={'/'}>New</Link>
                <Link href={'/'}>Classic</Link>
                <Link href={'/'}>Boots</Link>
                <Link href={'/'}>Coats</Link>
              </div>
            </HomeMenu>
          </HomeStyle>
        </HomeDiv>
        {/* <Gallery>
          {products.map((product) => (
            <Product
              key={product.attributes.slug}
              product={product.attributes}
            />
          ))}
        </Gallery> */}
      </main>
    </div>
  );
}
