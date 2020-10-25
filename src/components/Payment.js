import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import axios from "../axios";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  useEffect(() => {
    //generate strip secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subUnits (if use dollars expect cents)
        url: `payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    //handle strip
    event.preventDefault();
    console.log("form submitted");
    setProcessing(true); //stop clicking buy button

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>){" "}
        </h1>
        {/* address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Dilivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Aleppo</p>
            <p>Aleppo,Syria</p>
          </div>
        </div>
        {/* Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and dilivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <BasketItem
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <from onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <h3>Order Total: {getBasketTotal(basket)} $ </h3>
              </div>
              <button
                type="submit"
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
              {/* Errors */}
              {error && <div>{error}</div>}
            </from>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
