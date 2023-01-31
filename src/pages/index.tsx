import classes from "./index.module.scss";
import MotherDearVideoLooped from "../components/header-video/header-video";
import AboutUs from "../components/about-us/about-us";
import Screenshots from "../components/screenshots/screenshots";
import { MainHeaderMenu } from "../components/menu/menu.module";
import { YoutubeVideo } from "../components/youtube-video/youtube-video.module";
import { Subscribe } from "../components/subscribe-component/subcribe";
export default function Home(): JSX.Element {
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
				{/* <div className="page-title">
						Our Project
						<br />
						Mother, Dear
					</div>
					<YoutubeVideo youtubeLink="https://www.youtube.com/embed/B0XDReVuuGo" /> */}
				<Subscribe />
			</div>
		</>
	);
}
