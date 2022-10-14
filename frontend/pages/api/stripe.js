import Stripe from 'stripe';
import { getSession } from '@auth0/nextjs-auth0';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  const session = getSession(req, res);
  const user = session?.user;
  const stripeId = user['http://localhost:3000/stripe_customer_id'];

  if (req.method === 'POST') {
    try {
      //Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode: 'payment',
        customer: stripeId,
        payment_method_types: ['card'],
        shipping_address_collection: {
          allowed_countries: [
            'US',
            'CA',
            'GB',
            'BG',
            'DE',
            'FR',
            'ES',
            'SE',
            'NO',
          ],
        },
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity,
          };
        }),
        //Redirect to success or failed page
        success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      res.status(200).json(session);
    } catch (error) {
      console.log(error.message);
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
