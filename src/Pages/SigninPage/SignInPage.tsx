import React from "react";
import "./SignInPage.css";

import GoogleLogin from "react-google-login";

export default function SignInPage() {
  const responseGoogle = (res: any) => {
    console.log(res);
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
