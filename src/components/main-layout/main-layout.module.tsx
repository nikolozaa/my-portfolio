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

	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

	return (
		<div id="mainContainer" className={classes.mainContainer}>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			{/* <Pages/> */}

			{/* <div
				onTransitionEnd={() => {
					if (transitionStage === "fadeOut") {
						setDisplayChildren(children);
						setTransitionStage("fadeIn");
					}
				}}
				className={`${classes.mainBodyContainer} ${classes[transitionStage]}`}
			> */}
			<div>
				{/* 
<ScrollContainer>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
        - I'm Dante Chun -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer> */}

				{displayChildren}
			</div>
		</div>
	);
}
