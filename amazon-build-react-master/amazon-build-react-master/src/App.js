import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Checkout from "./checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const Promise = loadStripe(
  "pk_test_51HRWD2Ak5diG4tD3h5Oy2FOri3NBpF9Q5hmUf7RjhkmoTmAeerYqhw695CXNEeysK6USLenl2liy3hQihLWu8FqB00EjwQXfED" //public api key of stripe
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user login then do the follwing
        console.log("the user ", authUser?.id);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // log out if any
        dispatch({
          type: "STE_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={Promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
