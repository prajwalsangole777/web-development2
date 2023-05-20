import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./header.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleClick = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      console.log("AftersignOut", user);
    }
  };
  console.log("user Header", user);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        ></img>
      </Link>
      <div className="header__searchbar">
        <input></input>
        <SearchIcon />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello, {user ? user.email : "Guest"}
          </span>
          <Link to={!user && "/login"}>
            <span className="header__optionLineTwo" onClick={handleClick}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">$ Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Try</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__count">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
