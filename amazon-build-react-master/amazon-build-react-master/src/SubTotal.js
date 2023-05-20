import React from "react";
import { useHistory } from "react-router-dom";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function SubTotal({ totalPrice, NumberItem }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <h2>
            SubTotal ({NumberItem} items) : {value}
          </h2>
        )}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>

      <div className="subTotal__gift">
        <input type="checkbox"></input>
        This order contains a gift
      </div>
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
