import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./header.module.scss";
import { MainHeaderMenu } from "./menu/menu.module";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import { TikTokIcon } from "../styled-components/tiktok-icon/tiktok-icon";

interface MainHeaderProps {
	isLoading: boolean;
}

export function MainHeader({ isLoading }: MainHeaderProps): JSX.Element {
	const [rotatedLogo, setRotatedLogo] = useState<boolean>(false);
	return (
		<div className={classes.header}>
			<div className={`${classes.headerTopLine} animatedPaper`}>
				<div className={classes.menu}>
					<MainHeaderMenu />
				</div>

				<div className={`${classes.socialMediaIconContainer}`}>
					<a
						href="https://www.youtube.com/@ZambaraStudio"
						className={classes.socialIcon}
						target="_blank"
					>
						<YouTubeIcon />
					</a>
					<a
						href="https://www.facebook.com/ZambaraStudio"
						className={classes.socialIcon}
						target="_blank"
					>
						<FacebookIcon />
					</a>
					<a
						href="https://www.reddit.com/user/ZAMBARA2020"
						target="_blank"
						rel="noreferrer"
					>
						<div className={classes.socialIcon}>
							<TwitterIcon />
						</div>
					</a>
					<a
						href="https://twitter.com/ZambaraStudio"
						target="_blank"
						rel="noreferrer"
					>
						<div className={classes.socialIcon}>
							<RedditIcon />
						</div>
					</a>
					<a
						href="https://twitter.com/ZambaraStudio"
						target="_blank"
						rel="noreferrer"
					>
						<div className={classes.tiktokIcon}>
							<TikTokIcon />
						</div>
					</a>
				</div>
			</div>

			<div className={`${classes.logoTitle}`}>
				<div className={`${classes.logoContainer} animatedPaper`}>
					<Link href="/">
						<img
							onTransitionEnd={() => {
								setRotatedLogo(true);
							}}
							className={`${classes.logo} ${
								isLoading ? classes.rotateLogo : ""
							} ${!rotatedLogo ? classes.logoTransition : ""}`}
							src="/zambara-logo.svg"
						/>
					</Link>
				</div>
				<div className={`${classes.title} slideRight`}>ambara</div>
			</div>
		</div>
	);
}
