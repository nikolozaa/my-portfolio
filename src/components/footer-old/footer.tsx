import classes from "./footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import { useState } from "react";
import { DefaultHashLink } from "../default-router/default-hashlink";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import axios from "axios";
import { Subscribe } from "../subscribe-component/subcribe";
import { TikTokIcon } from "../styled-components/tiktok-icon/tiktok-icon";

export function MainFooter1(): JSX.Element {
	const [email, setEmail] = useState<string>("");
	const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
	const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const windowDimensions = useWindowDimensions();
	const mobileView = 800;

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const isValidEmail = emailRegex.test(email.toLowerCase());

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!isValidEmail) {
			setError(true);
		}
		// if(firstName&&lastName)
		// {
		// console.log("First Name: ",firstName,"\nLast Name: ",lastName)
		// }
	};

	// if (email == "" || !isValidEmail) {
	// 	return ("Please enter a valid email");
	// }

	// if(!isValidEmail){
	// 	return (
	// 		<div>
	// 			denied
	// 		</div>
	// 	);
	// }else{
	// 	<div>succes</div>
	// }

	// const test =  axios.post("/api/subscribe-to-letter", {
	// 	email,
	// })

	return (
		<div className={`${classes.bottom}`}>
			<Subscribe />

			<div className={classes.borderLine} />
			<div className={classes.secondFooterSection}>
				{/* <div className={classes.test}>random text IDK </div> */}
				{/* <div className={classes.borderLineForSecondSection}/> */}
				<div className={classes.pagesContianerForFooter}>
					<div className={classes.pagesFooterFirstSection}>
						<div>
							<DefaultHashLink smooth to="/#about-us">
								About
							</DefaultHashLink>
						</div>
						<div>
							<DefaultHashLink smooth to="/#screenshots">
								Screens
							</DefaultHashLink>
						</div>
						{/* {windowDimensions.width > mobileView ? null : (
							<div>
								<DefaultHashLink smooth to="/#our-work">
									Our Work
								</DefaultHashLink>
							</div>
						)} */}
					</div>
					<div className={classes.pagesFooterSecondSection}>
						{/* {windowDimensions.width > mobileView ? (
							<div className={classes.pagesFooterSecondSection}>
								<div>
									<DefaultHashLink smooth to="/#our-work">
										Our Work
									</DefaultHashLink>
								</div>
							</div>
						) : null} */}
					</div>
				</div>
				{/* <div className={classes.borderLineForSecondSection}/> */}
				<div className={classes.socialsIconContainer}>
					<div>
						<a
							href="https://www.facebook.com/ZambaraStudio"
							target="_blank"
							rel="noreferrer"
						>
							<div className={classes.circle}>
								<FacebookIcon />
							</div>
						</a>
					</div>
					{/* <div className={classes.igIcon}>
						<a
							href="https://www.instagram.com/nika_rukhadze__/"
							target="_blank"
							rel="noreferrer"
						>
							<div className={classes.circle}>
								<InstagramIcon />
							</div>
						</a>
					</div> */}
					<div className={classes.youtubeIcon}>
						<a
							href="https://www.youtube.com/@ZambaraStudio"
							target="_blank"
							rel="noreferrer"
						>
							<div className={classes.circle}>
								<YouTubeIcon />
							</div>
						</a>
					</div>

					<div className={classes.youtubeIcon}>
						<a
							href="https://twitter.com/ZambaraStudio"
							target="_blank"
							rel="noreferrer"
						>
							<div className={classes.circle}>
								<TwitterIcon />
							</div>
						</a>
					</div>
					<div className={classes.youtubeIcon}>
						<a
							href="https://www.reddit.com/user/ZAMBARA2020"
							target="_blank"
							rel="noreferrer"
						>
							<div className={classes.circle}>
								<RedditIcon />
							</div>
						</a>
					</div>

					<div className={classes.youtubeIcon}>
						<a
							href="https://www.tiktok.com/@zamabarstudio"
							target="_blank"
							rel="noreferrer"
						>
							<div className={classes.circle}>
								<TikTokIcon />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

// <form className={classes.subscribeMainContainer} onSubmit={handleSubmit}>
// 				<div className={classes.text}>Subscribe For News</div>
// 				{/* <input
// 					className={isValidEmail ? classes.inputTextField : classes.deniedMail}
// 					placeholder="yourmail@mail.com"
// 					onChange={(e) => setEmail(e.target.value)}
// 					value={email}
// 				/> */}
// 				{isFormSubmitted === true ? (
// 					<>
// 						{isValidEmail ? (
// 							<div>
// 								<input
// 									className={classes.inputTextField}
// 									placeholder="yourmail@mail.com"
// 									onChange={(e) => setEmail(e.target.value)}
// 									value={email}
// 									// setEmail("");
// 								/>
// 								<div className={classes.subsciptionMessage}>
// 									Thanks for subscription
// 								</div>
// 							</div>
// 						) : (
// 							<input
// 								className={classes.deniedMail}
// 								placeholder="yourmail@mail.com"
// 								onChange={(e) => setEmail(e.target.value)}
// 								value={email}
// 							/>
// 						)}
// 					</>
// 				) : (
// 					<input
// 						className={classes.inputTextField}
// 						placeholder="yourmail@mail.com"
// 						onChange={(e) => setEmail(e.target.value)}
// 						value={email}
// 					/>
// 				)}
// 				<button
// 					type="submit"
// 					className={classes.button}
// 					disabled={isSendingEmail}
// 					onClick={async () => {
// 						setIsFormSubmitted(true);
// 						setIsSendingEmail(true);
// 						const a = await axios.post("/api/subscribe-to-letter", {
// 							email,
// 						});
// 						console.log(a.status);
// 						setIsSendingEmail(false);
// 						console.log(a);
// 						// setEmail("");
// 						// notify();
// 					}}
// 				>
// 					Subscribe
// 				</button>

// 				{/* {error ? "Please enter valid mail" : null} */}
// 			</form>
