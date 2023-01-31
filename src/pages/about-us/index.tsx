import React from "react";
import classes from "./about-us.module.scss";

export default function AboutUs() {
	return (
		<div className={classes.aboutUsMainContainer}>
			<div className={classes.aboutUsContainer}>
				<div>Our team consists of motivated and professional:</div> developers,
				artists and game designers.
				<div>
					{" "}
					We create an indie game, that is specific and one of the popular
					genres.
				</div>{" "}
				The game follows an interesting and intriguing story, which makes the
				game interesting for the player.
			</div>
		</div>
	);
}
