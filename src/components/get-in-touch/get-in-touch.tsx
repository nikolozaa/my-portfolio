import React from "react";
import classes from "./get-in-touch.module.scss";

export default function GetInTouch() {
	return (
		<div className={classes.getInTouchMainContainer}>
			<div className={classes.seceondayFrom}>
				<div className={classes.mainFrom}>
					<div className={classes.mainFormContainer}>
						<input className={classes.inputField} type="text" />
					</div>
				</div>
			</div>
		</div>
	);
}
