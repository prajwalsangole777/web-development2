import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignInUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const registerUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth.user) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          ></img>
        </Link>
        <div className="login__container">
          <h1>Sign In</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="emial"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <h5>Password</h5>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button type="submit" onClick={SignInUser}>
              Sign In
            </button>
          </form>
          <p>
            By Signing in , you agree to Amazon's <a>Conditions</a> of{" "}
            <a>Use</a> and
            <a>Privacy Notice</a>.
          </p>
          <button type="submit" onClick={registerUser}>
            {" "}
            Cerate new Amazon Account
          </button>
        </div>
      </div>
      <div className="login__bottom_contaniner">
        <div className="login__bottom">
          <a> Conditions of Use </a>
          <a> Privacy Notice </a>
          <a> Help </a>
        </div>
        <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Login;
