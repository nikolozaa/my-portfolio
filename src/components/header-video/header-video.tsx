import React from "react";
import { DefaultHashLink } from "../default-router/default-hashlink";
import classes from "./header-video.module.scss";

export default function MotherDearVideoLooped() {
	return (
		<div className={classes.mainHeaderContainer}>
			<div className={classes.scrollDownMainContainer}>
				<div className={classes.motherDearText}>MOTHER DEAR</div>
				<div className={classes.text}>Scroll Down</div>
				<DefaultHashLink smooth to="/#about-us">
					<div className={classes.scrolldownContainer}>
						<div className={classes.scrolldownMainCircle}>
							<div className={classes.scrolldown}>
								<div className={classes.scrolldownArrow} />
							</div>
						</div>
					</div>
				</DefaultHashLink>
			</div>
			<video autoPlay muted loop className={classes.headerVideo}>
				<source src="https://saunge.s3.eu-central-1.amazonaws.com/random/mother-dear.mp4" />
			</video>
		</div>
	);
}
