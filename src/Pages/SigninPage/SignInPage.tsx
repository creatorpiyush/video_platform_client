import React from "react";
import "./SignInPage.css";

import GoogleLogin from "react-google-login";

import Axios from "axios";

export default function SignInPage() {
  const responseGoogle = (res: any) => {
    console.log(res);
    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    Axios.post("http://localhost:5555/signin", {
      name: name,
      email: email,
      googleId: googleId,
    }).then((response) => {
      console.log("Success");
    });
  };
  return (
    <div className="SignInPage">
      <div className="Container">
        <div className="top">
          <h1 style={{ color: "black" }}>SignIn With Google</h1>
        </div>
        <div className="body">
          <GoogleLogin
            clientId="195450859372-s2ccj8jgvgoimhkuc8djpb7mvc2h1v03.apps.googleusercontent.com"
            buttonText="Sign In"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}
