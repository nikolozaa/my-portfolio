import classes from "./youtube-video.module.scss";

interface YoutubeVideoProps {
	youtubeLink: string;
}
export function YoutubeVideo(props: YoutubeVideoProps): JSX.Element {
	return (
		<>
			<div className={classes.videoContainerParent}>
				<div className={classes.videoContainer}>
					<iframe
						className={classes.videoIframe}
						src={props.youtubeLink}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
					/>
				</div>
			</div>
		</>
	);
}
