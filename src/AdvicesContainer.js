import React, { useState, useEffect } from "react";
import "./index.css";
import Button from "./Button";
import Advice from "./Advice";
import pauseMb from "./images/pattern-divider-mobile.svg";
import pauseDt from "./images/pattern-divider-desktop.svg";
const url = "https://api.adviceslip.com/advice";

const AdvicesContainer = () => {
	const [advices, setAdvices] = useState("");
	const [loading, setLoading] = useState(true);

	const handleClick = async () => {
		setLoading(true);

		const response = await fetch(url);

		const result = await response.json();

		console.log("slip is: ", JSON.stringify(result.slip, null, 4));

		setAdvices(result.slip);
	};

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	}, [loading]);

	useEffect(() => {
		handleClick();
	}, []);

	return (
		<div className="container">
			{!loading ? <Advice advices={advices} /> : <p>Loading...</p>}

			<picture>
				<source media="(max-width:499px)" srcSet={pauseMb} />
				<source media="(min-width:500px)" srcSet={pauseDt} />
				<img src={pauseDt} alt="" />
			</picture>

			<Button handleClick={handleClick} />
		</div>
	);
};

export default AdvicesContainer;
