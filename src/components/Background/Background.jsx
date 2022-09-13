import React from "react";
import "./background.scss";

export const Background = () => {
  return (
    <div class="background-container">
      <img
        className="background"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
      />
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
    </div>
  );
};
