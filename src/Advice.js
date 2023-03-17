import React from "react";

const Advice = ({ advices }) => {
	return (
		<>
			<h1>ADVICE #{advices.id}</h1>
			<p>{advices.advice}</p>
		</>
	);
};
export default Advice;