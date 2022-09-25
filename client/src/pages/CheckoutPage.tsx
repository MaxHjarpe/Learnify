import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from '../components/Checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LlrH3HJh19VpMMBrWuJMTzlrhrHyTSe6NqVH4Inp23A2cJFjtXla38QvEZ2AxExvQF7OKLugwpUMxS0XmcsW3my00ObaMAoku');

export default function CheckoutPage() {


  return (
    <Elements stripe={stripePromise} >
      <Checkout />
    </Elements>
  );
};