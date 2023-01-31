import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		handleResize();
	}, []);

	return windowDimensions;
};
