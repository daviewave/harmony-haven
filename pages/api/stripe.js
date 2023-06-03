import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('\n' + 'BODY: ' + req.body + '\n');

      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1NEkuZERfRXPl7TxOtPzsH5R' },
          { shipping_rate: 'shr_1NEkvHERfRXPl7TxqmbbSiC2' },
        ],
        line_items: req.body.map((item) => {
          console.log('ITEM: ' + item);
          const img = item.image[0].asset._ref;
          const newImg = img
            .replace(
              'image-',
              'https://cdn.sanity.io/images/4w11zk3i/production/'
            )
            .replace('-webp', '.webp')
            .replace('-jpg', '.jpg')
            .replace('-png', '.png')
            .replace('-jpeg', '.jpeg');

          // console.log('IMAGE: ' + newImg);
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [newImg],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      console.log(err.stack);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
