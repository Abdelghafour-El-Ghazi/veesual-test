import React from "react";
import { Route, Redirect } from "react-router-dom";

let token;

// Trying to get the token from the localStorage to see if the user has already got the token
if (localStorage.getItem("spotifyToken")) {
  token = localStorage.getItem("spotifyToken");
}

const AuthRoute = ({ component: Component, ...rest }) => {
  const paramsString = window.location.hash;
  if (paramsString.includes("access_token")) {
    // Getting the access_token from the URL
    token = paramsString.split("access_token=")[1].split("&")[0];
    // Storing the token in the localStorage for using it later
    localStorage.setItem("spotifyToken", token);
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return !token ? <Redirect to='/login' /> : <Component {...props} />;
      }}
    />
  );
};

export default AuthRoute;
