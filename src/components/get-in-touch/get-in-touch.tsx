import React from "react";
import classes from "./get-in-touch.module.scss";

export default function GetInTouch() {
	return (
		<div className={classes.getInTouchMainContainer}>
			<div className={classes.seceondayFrom}>
				<div className={classes.mainFrom}>
					<div className={classes.mainFormContainer}>
						<input
							placeholder="email@email.com"
							className={classes.inputTextField}
							type="text"
						/>
						<input
							placeholder="First Name"
							className={classes.inputTextField}
							type="text"
						/>
						<input
							placeholder="Last Name"
							className={classes.inputTextField}
							type="text"
						/>
						<input
							placeholder="Chat"
							className={classes.inputTextField}
							type="text"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
