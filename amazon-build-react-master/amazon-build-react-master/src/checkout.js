import React, { useState } from "react";
import "./checkout.css";
import SubTotal from "./SubTotal";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  var totalPrice = 0;
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/400x39-SWM_With-Disclaimer_np._CB406908440_.jpg"
        ></img>
        <div className="checkout__title">
          <h2>Hi,{user ? user.email : "Sign In to Checkout"}</h2>
          <h2>Your shopping Basket </h2>
          {basket.map((item) => {
            totalPrice += item.price;
            return (
              <CheckoutItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal
          totalPrice={totalPrice.toFixed(2)}
          NumberItem={basket?.length}
        />
      </div>
    </div>
  );
}

export default Checkout;
