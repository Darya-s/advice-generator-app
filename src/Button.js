import "./index.css";
import DICE from "./images/icon-dice.svg";

const Button = ({ throttleFetchData, isDisabled }) => {
  return (
    <button
      className={isDisabled ? "rotate" : " "}
      disabled={isDisabled}
      onClick={throttleFetchData}
    >
      <img alt="dice" src={DICE} />
    </button>
  );
};

export default Button;
