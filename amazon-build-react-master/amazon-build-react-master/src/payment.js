import React, { useEffect, useState } from "react";
import CheckoutItem from "./CheckoutItem";
import { Link, useHistory } from "react-router-dom";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import { getTotalPrice } from "./reducer";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "./axios";
import CurrencyFormat from "react-currency-format";
import { db } from "./firebase";
// function component
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // get Client Secret when there is change in basket
    const getClientSecret = async () => {
      // post request to backend api
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getTotalPrice(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("clientSecret", clientSecret);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            paymentId: paymentIntent.id,
            amount: paymentIntent.amount,
            date: paymentIntent.created,
            basket: basket,
          });

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    console.log(e);
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {" "}
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivary address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>pawan nagar ,TV center</p>
            <p>Aurangabad</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>review items and delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item) => (
              <CheckoutItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__detail">
            <form onSubmit={handleSubmit}>
              <CardElement className="stripeCard" onChange={handleChange} />
              {/* Error */}
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="payment__price">
                <CurrencyFormat
                  renderText={(value) => <h2>Order Total {value}</h2>}
                  value={getTotalPrice(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={processing || disable || succeeded}
                  type="submit"
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
