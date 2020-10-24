import React, { useState } from "react";
import logo from "../images/Amazon_logo.svg";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //sign in to existing acount
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((err) => alert(err.message));
  };
  //create new account
  const createAccount = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <from>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="login__signInButton">
            {" "}
            Sign In
          </button>
        </from>
        <p>
          By signing-in you agree to the AMAZOn FAKE CLONE conditions of use &
          sale. please see our privacy Notice,our cookies Noticeand our
          Interset-Based Ads Notice.
        </p>
        <button onClick={createAccount} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
