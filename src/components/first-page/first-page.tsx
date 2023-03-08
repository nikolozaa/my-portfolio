import React, { useState } from "react";
import {
	Animator,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveOut,
	ScrollContainer,
	ScrollPage,
	Sticky,
	StickyIn,
	ZoomIn,
} from "react-scroll-motion";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import classes from "./first-page.module.scss";

export default function FirstPage() {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());
	const [onMouseEnter, setOnMouseEnter] = useState<boolean>(false);
	const windowDimensions = useWindowDimensions();
	const mobileView = 800;

	return (
		// <div className={classes.mainFirstPageBackground}>
		<div className={classes.firstPageContainer}>
			<div className={classes.aboutMe}>
				<div className={classes.hiContainer}>
					<span className={classes.hi}>Hi</span>
					<div>
						<span className={classes.nick}>I'm Nick</span>
					</div>
				</div>
				{windowDimensions.width > mobileView ? (
					<div className={classes.developer}>
						Full-Stack <span className={classes.fullstack}>Developer</span>
					</div>
				) : (
					<div className={classes.developer}>Full-Stack Developer</div>
				)}
			</div>
			<div>
				{onMouseEnter === true ? (
					<div
						className={classes.gif}
						onMouseEnter={() => {
							// setOnMouse(OnMouse => !OnMouse)
							setOnMouseEnter(true);
						}}
						onMouseLeave={() => {
							setOnMouseEnter(false);
						}}
						style={{
							backgroundImage: `url(/gifs/nikita.gif)`,
						}}
					/>
				) : (
					<div
						className={classes.photo}
						onMouseEnter={() => {
							// setOnMouse(OnMouse => !OnMouse)
							setOnMouseEnter(true);
						}}
						onMouseLeave={() => {
							setOnMouseEnter(false);
						}}
						style={{
							backgroundImage: `url(/images/onHover.jpg)`,
						}}
					/>
				)}
			</div>
			<div className={classes.img} />
		</div>
		//  </div>
	);
}

// <video autoPlay muted loop className={classes.headerVideo}>
// 				<source src="/videos/nikushita-video" />
// 			</video>
