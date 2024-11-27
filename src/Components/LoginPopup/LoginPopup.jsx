import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = (setShowLogin) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login_popup">
      <form className="login_popup_container">
        <div className="login_popup_title">
          <h2> {currState} </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login_popup_input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name=""
              placeholder="your name "
              required
              id=""
            />
          )}

          <input
            type="email"
            name=""
            placeholder="your email address "
            required
          />
          <input type="password" placeholder="password" />
          <button>
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
        </div>

        <div className="login_popup_condition">
          <input type="checkbox" name="" required id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
