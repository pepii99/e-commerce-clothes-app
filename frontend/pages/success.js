import Link from 'next/link';
import {
  SuccessWrapper,
  Title,
  Card,
  LinkWrapper,
} from '../styles/success.style';

const stripe = require('stripe')(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ['line_items'],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  console.log(order);
  return (
    <SuccessWrapper>
      <Title>
        <h1>Thank you for your order!</h1>
        <h2>A confirmation email has been sent to your email address</h2>
      </Title>
      <Card>
        <div>
          <h3>Address</h3>
          {Object.entries(order.customer_details.address).map(
            ([key, value]) => (
              <p key={key}>
                {key} : {value}
              </p>
            )
          )}
        </div>
        <div>
          <h3>Products</h3>
          {order.line_items.data.map((item) => (
            <div key={item.id}>
              <p>Product: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price.unit_amount / 100}$</p>
            </div>
          ))}
        </div>
      </Card>
      <LinkWrapper>
        <Link href={'/'}>Continue Shopping</Link>
      </LinkWrapper>
    </SuccessWrapper>
  );
}
