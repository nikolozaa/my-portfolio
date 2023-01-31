import React from "react";
import ReactPlayer from "react-player";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import classes from "./our-work.module.scss";

export default function OurWork() {
	const windowDimensions = useWindowDimensions();
	const mobileView = 800;

	return (
		<div className={classes.ourWorkMainContainer}>
			<div className={classes.ourWorkDescription}>Playlist of our work </div>
			{windowDimensions.width > mobileView ? (
				<div className={classes.playList}>
					<ReactPlayer
						url={[
							"https://www.youtube.com/watch?v=PovVqZHVcLg&ab_channel=Zambara",
							"https://www.youtube.com/watch?v=MRNCy3uFTpE&ab_channel=Zambara",
						]}
					/>
				</div>
			) : (
				<div className={classes.playList}>
					<ReactPlayer
						width={300}
						url={[
							"https://www.youtube.com/watch?v=PovVqZHVcLg&ab_channel=Zambara",
							"https://www.youtube.com/watch?v=MRNCy3uFTpE&ab_channel=Zambara",
						]}
					/>
				</div>
			)}
		</div>
	);
}
