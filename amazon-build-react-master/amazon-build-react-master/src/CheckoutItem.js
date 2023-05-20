import React, { useState } from "react";
import "./CheckoutItem.css";
import { useStateValue } from "./StateProvider";
import { useSpring, animated, config } from "react-spring";

function CheckoutItem({ id, title, price, rating, img, hideButton }) {
  const [{ basket }, dispatch] = useStateValue(false);
  const [remove, setRemove] = useState();
  const fade = useSpring({
    opacity: remove ? 0 : 1,
    height: remove ? "100px" : "200px",
    config: { duration: 500 },
  });
  const removeFrombasket = () => {
    setRemove(!remove);
    setTimeout(() => {
      const index = basket?.findIndex((item) => item.id === id);
      basket.splice(index, 1);
      dispatch({
        type: "REMOVE_FROM_BASKET",
        item: basket,
      });
    }, 550);
  };

  return (
    <animated.div className="checkoutItem" style={fade}>
      <div className="">
        <img className="checkoutItem__img" src={img}></img>
      </div>
      <div className="checkoutItem__info">
        <h4>{title}</h4>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutItem__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFrombasket}>Remove from basket</button>
        )}
      </div>
    </animated.div>
  );
}

export default CheckoutItem;
