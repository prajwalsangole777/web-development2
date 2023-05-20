import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, img }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };

  return (
    <div className="product">
      {/* <div className="product"> */}
      <div className="product__info">
        <p className="product__infoTitle">{title}</p>
        <p className="product__infoPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__infoImage" src={img}></img>
      <button onClick={addtoBasket}>Add to Basket</button>
      {/* </div> */}
    </div>
  );
}

export default Product;
