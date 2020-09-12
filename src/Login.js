import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SIGN IN

  const signin = (e) => {
    e.preventDefault();
    //FIREBASE
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  // REGISTER
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Success Crated
        console.log(auth);
        // To refresh a new page
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err);
      });

    //FIREBASE
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_image"
          alt="amazonImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>

          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required="true"
          />

          <h5>Password</h5>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required="true"
          />

          <button
            type="submit"
            className="login__signinbutton"
            onClick={signin}
          >
            Sign In
          </button>
        </form>
        <p>*Conditions Applied</p>
        <button className="login__registerbutton" onClick={register}>
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
