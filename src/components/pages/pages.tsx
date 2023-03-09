import React, { useEffect } from "react";
import classes from "./pages.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import { DefaultHashLink } from "../default-router/default-hashlink";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Pages() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className={classes.pagesMainContainer}>
			<DefaultHashLink smooth to="/#home">
				<div
					data-aos="fade-right"
					data-aos-duration="3100"
					className={classes.backgroundCircleHome}
					style={{ backgroundImage: `url(/images/icon-astro-base.png)` }}
				/>
			</DefaultHashLink>
			<DefaultHashLink smooth to="/#about-me">
				<div
					data-aos="fade-right"
					data-aos-duration="3100"
					onClick={() => {
						console.log("TEST");
					}}
					className={classes.backgroundCircleMan}
					style={{ backgroundImage: `url(/images/icon-astro.png)` }}
				/>
			</DefaultHashLink>
			<DefaultHashLink smooth to="/#get-in-touch">
				<div
					data-aos="fade-right"
					data-aos-duration="3100"
					className={classes.backgroundCircleGetInTouch}
					style={{
						backgroundImage: `url(/images/icon-astro-get-in-touch.png)`,
					}}
				/>
			</DefaultHashLink>
		</div>
	);
}
