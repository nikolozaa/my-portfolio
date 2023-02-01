import React from "react";
import classes from "./pages.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import { DefaultHashLink } from "../default-router/default-hashlink";

export default function Pages() {
	return (
		<div className={classes.pagesMainContainer}>
			<DefaultHashLink smooth to="/#home">
				<div
					className={classes.backgroundCircleHome}
					style={{ backgroundImage: `url(/images/icon-astro-base.png)` }}
				/>
			</DefaultHashLink>
			<DefaultHashLink smooth to="/#about-me">
				<div
					className={classes.backgroundCircleMan}
					style={{ backgroundImage: `url(/images/icon-astro.png)` }}
				/>
			</DefaultHashLink>
			<DefaultHashLink smooth to="/#get-in-touch">
				<div
					className={classes.backgroundCircleGetInTouch}
					style={{
						backgroundImage: `url(/images/icon-astro-get-in-touch.png)`,
					}}
				/>
			</DefaultHashLink>
		</div>
	);
}
