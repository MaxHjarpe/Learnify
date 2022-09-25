import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Card, Form, Input, notification } from "antd";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { removeBasket } from "../redux/slice/basketSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import CheckoutSummary from "./CheckoutSummary";

const Checkout = () => {
  const [cardName, setCardName] = useState<string>("");

  const stripe = useStripe();
  const elements = useElements();
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const [form] = Form.useForm();

  const handlePayment = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    try {
      const cardElement = elements.getElement(CardNumberElement);
      const paymentResult = await stripe.confirmCardPayment(
        basket?.clientSecret!,
        {
          payment_method: {
            card: cardElement!,
            billing_details: {
              name: cardName,
            },
          },
        }
      );
      if (paymentResult.paymentIntent?.status === "succeeded") {
        notification.success({
          message: "Your Payment was Successful!",
        });
        dispatch(removeBasket());
        setTimeout(() => {
          history.push("/profile");
        }, 1000);
      } else {
        notification.error({
          message: paymentResult.error?.message!,
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__form">
        <h1>Checkout Page</h1>
        <Card title="Fill your Card details here">
          <Form form={form} layout="vertical">
            <Form.Item
              name="cardName"
              rules={[
                { required: true, message: "Card Name is required", min: 5 },
              ]}
              label="Name on Card"
            >
              <Input
                name="cardName"
                placeholder="Mention the name on your card"
                value={cardName}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Card Number">
              <div className="stripe-input">
                <CardNumberElement />
              </div>
            </Form.Item>
            <div className="inline">
              <Form.Item label="Expiry Date">
                <div className="stripe-input">
                  <CardExpiryElement />
                </div>
              </Form.Item>
              <Form.Item label="CVV">
                <div className="stripe-input">
                  <CardCvcElement />
                </div>
              </Form.Item>
            </div>
          </Form>
        </Card>
      </div>
      <div className="checkout__summary">
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default Checkout;
