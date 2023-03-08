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
import classes from "./about-me.module.scss";
import BatteryCharging90Icon from "@mui/icons-material/BatteryCharging90";

export default function AboutMe() {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

	return (
		<div className={classes.aboutMeMainContainer}>
			<div className={classes.aboutMe}>
				<div>
					<div> {"{"}</div>
					<br />
					<div>
						<span className={classes.jsonProps}> "name" </span>:{" "}
						<span className={classes.jsonValuesString}>"Nick"</span>,
					</div>
					<div>
						<span className={classes.jsonProps}> "last name" </span>:{" "}
						<span className={classes.jsonValuesString}>"Rukhadze"</span>,
					</div>
					<div>
						<span className={classes.jsonProps}> "age" </span>:{" "}
						<span className={classes.jsonValuesNumber}>22 </span>,
					</div>
					<div>
						<span className={classes.jsonProps}> "experience" </span> : {"{"}
						<div className={classes.expValues}>
							<span className={classes.jsonProps}> "year" </span>:{" "}
							<span className={classes.jsonValuesNumber}>1 </span>,
							<div className={classes.expValues}>
								<span className={classes.jsonProps}> "languages" </span> : {"{"}
								<div className={classes.langs}>
									<div>
										<span className={classes.jsonProps}> "html" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
									<div>
										<span className={classes.jsonProps}> "css" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
									<div>
										<span className={classes.jsonProps}> "js" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
									<div>
										<span className={classes.jsonProps}> "ts" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
									<div>
										<span className={classes.jsonProps}> "nodejs" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
									<div>
										<span className={classes.jsonProps}> "graphql" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
									<div>
										<span className={classes.jsonProps}> "react" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
									<div>
										<span className={classes.jsonProps}> "git" </span>:{" "}
										<span className={classes.jsonValuesString}>
											<BatteryCharging90Icon />
										</span>
										,
									</div>
								</div>
								<div className={classes.curlyBraces}>{"}"}</div>
							</div>
						</div>
						<div className={classes.curlyBraces}>{"}"}</div>
					</div>
					<br />
					{"}"}
				</div>
			</div>
		</div>
	);
}
