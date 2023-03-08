import classes from "./index.module.scss";
import MotherDearVideoLooped from "../components/header-video/header-video";
import AboutUs from "../components/about-us/about-us";
import Screenshots from "../components/screenshots/screenshots";
import { MainHeaderMenu } from "../components/menu/menu.module";
import { YoutubeVideo } from "../components/youtube-video/youtube-video.module";
import { Subscribe } from "../components/subscribe-component/subcribe";
import FirstPage from "../components/first-page/first-page";
import AboutMe from "../components/about-me/about-me";
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
import GetInTouch from "../components/get-in-touch/get-in-touch";
export default function Home(): JSX.Element {
	const FadeUp = batch(Fade(), Move(), Sticky());
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

	return (
		// <div className={classes.body}>
		// 	<MainHeaderMenu />
		// 	<div className={classes.headerVideoContainer} id="home">
		// 		<MotherDearVideoLooped />
		// 	</div>
		// 	<div className={classes.aboutUs} id="about-us">
		// 		<AboutUs />
		// 	</div>
		// 	{/* <div className={classes.ourWork} id="our-work" >
		// 			<div ><OurWork /> </div>
		// 			</div> */}
		// 	<div className={classes.screenshots} id="screenshots">
		// 		<Screenshots />
		// 	</div>
		// </div>
		<>
			<div className={classes.body}>
				<div className={classes.headerVideoContainer} id="home">
					<FirstPage />
				</div>

				<div className={classes.aboutMe} id="about-me">
					<AboutMe />
				</div>

				<div className={classes.getInTouch} id="get-in-touch">
					<GetInTouch />
				</div>
			</div>
		</>
	);
}
