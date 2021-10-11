import React from "react";

const spotify = {
  clientID: "86b79340a1b44160bc0f24fd00028cae",
  redirectURI: "https://veesual-spotify-abdelghafour.netlify.app/",
};

const authLink = `https://accounts.spotify.com/authorize?client_id=${spotify.clientID}&redirect_uri=${spotify.redirectURI}&response_type=token`;
const Login = () => {
  let welcomeText =
    "Use Visual Spotify to search for you favorite Albums on Spotify";

  /* ********
   Trying to get the expired token, to see if the user was redirected to 
   this page for expiration of token and change the text accordingly
  ******** */

  if (localStorage.getItem("expired")) {
    welcomeText =
      "Your token have expired, please click on Get Started to get a new one";
  }

  const authorize = () => {
    if (localStorage.getItem("expired")) {
      // Delete the expired token when authorizing again
      localStorage.removeItem("expired");
    }
    window.location.replace(authLink);
  };
  return (
    <div className='mainLogin'>
      <div className='mainLogin-intro'>{welcomeText}</div>
      <button className='mainLogin-button' onClick={authorize}>
        Get Started
      </button>
    </div>
  );
};

export default Login;
