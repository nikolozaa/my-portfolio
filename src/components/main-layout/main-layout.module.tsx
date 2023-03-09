import { useEffect, useState } from "react";
import {
	Animator,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveIn,
	MoveOut,
	ScrollContainer,
	ScrollPage,
	Sticky,
	StickyIn,
	ZoomIn,
} from "react-scroll-motion";
import FirstPage from "../first-page/first-page";
import { MainFooter } from "../footer/footer.module";
import { MainHeader } from "../header/header.module";
import Pages from "../pages/pages";
import classes from "./main-layout.module.scss";
import "aos/dist/aos.css";
import AOS from "aos";
interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): JSX.Element {
	const [displayChildren, setDisplayChildren] =
		useState<React.ReactNode>(children);
	const [transitionStage, setTransitionStage] = useState<string>("fadeOut");
	useEffect(() => {
		setTransitionStage("fadeIn");
	}, []);

	useEffect(() => {
		if (children !== displayChildren) {
			setTransitionStage("fadeOut");
		}
	}, [children, displayChildren]);

	useEffect(() => {
		AOS.init();
	}, []);

	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

	return (
		<div id="mainContainer" className={classes.mainContainer}>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<div className={classes.pages}>
				<Pages />
			</div>
			<div>{displayChildren}</div>
		</div>
	);
}
