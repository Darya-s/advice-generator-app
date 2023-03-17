import React, { useState } from "react";
import "./index.css";

import dice from "./images/icon-dice.svg";

const Button = ({ handleClick }) => {
	const [hover, setHover] = useState(false);

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

	return (
		<div>
			<button
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`${hover ? "on" : ""}`}
			>
				<img src={dice} alt="" />
			</button>
		</div>
	);
};

export default Button;
