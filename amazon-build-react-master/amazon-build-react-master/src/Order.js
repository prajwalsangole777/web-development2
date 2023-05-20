import React from "react";
import "./Order.css";
import CheckoutItem from "./CheckoutItem";
import moment from "moment";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.date).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">{order.id}</p>
      {order?.data.basket?.map((item) => (
        <div className="order__container">
          <CheckoutItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            hideButton={true}
          />
          <hr></hr>
        </div>
      ))}
      <h2 className="order__price">Order Total: ${order?.data.amount / 100}</h2>
    </div>
  );
}

export default Order;
