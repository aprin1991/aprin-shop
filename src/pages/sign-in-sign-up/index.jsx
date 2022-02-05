import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./sign-in-sign-up.style.scss";
function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up ">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
