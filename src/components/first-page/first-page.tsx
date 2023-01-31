import React from "react";
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
import classes from "./first-page.module.scss";

export default function FirstPage() {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

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
				<div className={classes.developer}>
					Full-Stack <span className={classes.fullstack}>Developer</span>
				</div>
			</div>
			<div>
				<div
					className={classes.photo}
					style={{
						backgroundImage: `url(/images/for-portfolio.png)`,
					}}
				/>
			</div>
		</div>
		//  </div>
	);
}
