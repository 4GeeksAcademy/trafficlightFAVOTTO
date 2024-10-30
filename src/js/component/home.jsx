import React, { useState } from "react";

export function TrafficLight() {
	const [glowingColor, setGlowingColor] = useState(null);

	const handleGlow = (color) => {
		setGlowingColor(color);
	};

	return (
		<div className="traffic-light-form">
			<div className="traffic-light">
				<div
					className={`light red${glowingColor === "red" ? " glow" : ""}`}
					onClick={() => handleGlow("red")}
				></div>
				<div
					className={`light yellow${glowingColor === "yellow" ? " glow" : ""}`}
					onClick={() => handleGlow("yellow")}
				></div>
				<div
					className={`light green${glowingColor === "green" ? " glow" : ""}`}
					onClick={() => handleGlow("green")}
				></div>
			</div>
			<div className="vertical-line"></div>
			<div className="horizontal-line"></div>
		</div>
	);
}

export default TrafficLight;




