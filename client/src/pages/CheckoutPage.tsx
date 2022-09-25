import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import agent from "../actions/agent";
import Checkout from "../components/Checkout";
import { setBasket } from "../redux/slice/basketSlice";
import { useAppDispatch } from "../redux/store/configureStore";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51LlrH3HJh19VpMMBrWuJMTzlrhrHyTSe6NqVH4Inp23A2cJFjtXla38QvEZ2AxExvQF7OKLugwpUMxS0XmcsW3my00ObaMAoku"
);

export default function CheckoutPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    agent.Payments.paymentIntent()
      .then((basket) => dispatch(setBasket(basket)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}
