import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import SignInPage from "./Pages/SigninPage/SignInPage";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <>
      <div className="top">
        <NavBar />
      </div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/signin" exact render={() => <SignInPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
