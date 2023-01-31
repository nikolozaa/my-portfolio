import React from "react";
import classes from "./pages.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";

export default function Pages() {
	return (
		<div className={classes.pagesMainContainer}>
			<HomeIcon />
			<FaceIcon />
		</div>
	);
}
