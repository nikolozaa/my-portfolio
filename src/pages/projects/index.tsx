import React from "react";
import ReactPlayer from "react-player";
import { useWindowDimensions } from "../../components/hooks/use-window-dimensions";
import { YoutubeVideo } from "../../components/youtube-video/youtube-video.module";
import classes from "./projects.module.scss";

export default function Projects() {
	const windowDimensions = useWindowDimensions();
	const mobileView = 800;

	return (
		<div className={classes.projectsMainContainer}>
			<div className="page-title">
				Our Project
				<br />
				<a href="https://mother-dear.com/" target="_blank" rel="noreferrer">
					Mother, Dear
				</a>
			</div>

			{windowDimensions.width > mobileView ? (
				<div>
					<div className={classes.eachVideo}>
						<ReactPlayer url="https://www.youtube.com/watch?v=OyRMjpWnSec&ab_channel=ZambaraStudio" />
					</div>
					<div className={classes.eachVideo}>
						<ReactPlayer url="https://www.youtube.com/watch?v=sK1EldP4xgw&ab_channel=ZambaraStudio" />
					</div>
				</div>
			) : (
				<div>
					<div className={classes.eachVideo}>
						<ReactPlayer
							width={300}
							url="https://www.youtube.com/watch?v=OyRMjpWnSec&ab_channel=ZambaraStudio"
						/>
					</div>
					<div className={classes.eachVideo}>
						<ReactPlayer
							width={300}
							url="https://www.youtube.com/watch?v=sK1EldP4xgw&ab_channel=ZambaraStudio"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
