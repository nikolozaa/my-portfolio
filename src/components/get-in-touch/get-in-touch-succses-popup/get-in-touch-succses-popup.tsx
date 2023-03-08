import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import classes from "./get-in-touch-succses-popup.module.scss";

export interface SubscribeSuccesPupupProps {
	isOpen: boolean;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SubscribeSuccesPupup({
	isOpen,
	handleClick,
}: SubscribeSuccesPupupProps) {
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Dialog
			PaperProps={{
				sx: {
					borderRadius: 5,
					maxWidth: "revert",
					width: 1200,
					boxShadow: "none",
					backgroundColor: "transparent",
					overflowY: "none",
				},
			}}
			onClose={handleClose}
			open={isOpen}
		>
			<DialogContent>
				<div className={classes.backgroundPic}>
					<div className={classes.mainContainer}>
						<div className={classes.text}>
							<div> Thanks for subscription</div>
							<div className={classes.latestNotf}>
								You will get latest notifications on your email
							</div>
						</div>
						<button className={classes.btn} onClick={handleClick}>
							CLOSE
						</button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
