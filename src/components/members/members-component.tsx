import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import classes from "./members-component.module.scss";

interface MembersProps {
	id: string;
	img: string;
	name: string;
	lastName: string;
	jobTitle: string;
}

export default function MembersComponent(p: MembersProps) {
	const [onMouse, setOnMouse] = useState<boolean>(false);
	const windowDimensions = useWindowDimensions();
	const mobileView = 800;

	return (
		<div
			className={classes.teamMemberMainContainer}
			onMouseEnter={() => {
				// setOnMouse(OnMouse => !OnMouse)
				setOnMouse(true);
			}}
			onMouseLeave={() => {
				setOnMouse(false);
			}}
		>
			{windowDimensions.width > mobileView ? (
				<>
					{onMouse === true ? (
						<div
							className={classes.img1}
							style={{
								backgroundImage: `url(${p.img})`,
							}}
						/>
					) : (
						<img className={classes.img} src={p.img} />
					)}
					{onMouse === true ? (
						<div className={classes.membersInfoMainContainer}>
							<div className={classes.test}>
								<div>{p.name}</div>
								<div>{p.lastName}</div>
								<div>{p.jobTitle}</div>
							</div>
						</div>
					) : null}
				</>
			) : (
				<>
					{" "}
					<img className={classes.img} src={p.img} />{" "}
					<div className={classes.membersInfoMainContainer}>
						<div className={classes.test}>
							<div>{p.name}</div>
							<div>{p.lastName}</div>
							<div>{p.jobTitle}</div>
						</div>
					</div>{" "}
				</>
			)}

			{/* {onMouse === true ? (
				<div
					className={classes.img1}
					style={{
						backgroundImage: `url(${p.img})`,
					}}
				/>
			) : (
				<img className={classes.img} src={p.img} />
			)}
			{onMouse === true ? (
				<div className={classes.membersInfoMainContainer}>
					<div className={classes.test}>
						<div>{p.name}</div>
						<div>{p.lastName}</div>
						<div>{p.jobTitle}</div>
					</div>
				</div>
			) : null} */}
		</div>
	);
}

{
	/* {onMouse === true ? <img src={p.gif}/> : null} */
}

{
	/* <img className={onMouse === true ? classes.imgOnMouseEnter : classes.img}  src={p.img}/> */
}

{
	/* {onMouse === true ? <img className={classes.imgOnMouseEnter} src={p.gif}/> : <img className={classes.img} src={p.img}/>} */
}
