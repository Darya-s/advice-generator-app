//import React, { useState } from "react";
import "./index.css";
import DICE from "./images/icon-dice.svg";


const Button = ({ throttleFetchData,isDisabled }) => {
  return (
    <div>
    <button
      className={isDisabled ? "rotate" : " "}
      disabled={isDisabled}
      onClick={throttleFetchData}
    >
      <img alt="dice" src={DICE} />
    </button>
  </div>
  );
};

export default Button;
