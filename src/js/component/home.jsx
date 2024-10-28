import React, { useState } from "react";

export function TrafficLight() {
	const [glowingColor, setGlowingColor] = useState(null);

	
	const randomGlow = () => {
		const colors = ["red", "yellow", "green"];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setGlowingColor(randomColor);
	};

	return (
		<div className="traffic-light-form">
			<div className="traffic-light">
				<div
					className={`light red${glowingColor === "red" ? " glow" : ""}`}></div>
				<div
					className={`light yellow${glowingColor === "yellow" ? " glow" : ""}`}></div>
				<div
					className={`light green${glowingColor === "green" ? " glow" : ""}`}></div>
			</div>
			<div className="vertical-line"></div>
			<button onClick={randomGlow}>Encender Color</button>
		</div>
	);
}

export default TrafficLight;



