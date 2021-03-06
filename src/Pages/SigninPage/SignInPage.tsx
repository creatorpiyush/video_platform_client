import React, { useState } from "react";
import "./SignInPage.css";

import GoogleLogin from "react-google-login";

import Axios from "axios";

export default function SignInPage() {
  const [channelName, setChannelName] = useState<string>("");

  const responseGoogle = (res: any) => {
    console.log(res);
    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    const profilePictureUrl = res.profileObj.imageUrl;
    Axios.post("http://localhost:5555/signin", {
      name: name,
      email: email,
      googleId: googleId,
      channelName: channelName,
      profilePictureUrl: profilePictureUrl,
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
          <input
            type="text"
            placeholder="Channel Name..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setChannelName(event.target.value);
            }}
            name=""
            id=""
          />
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
