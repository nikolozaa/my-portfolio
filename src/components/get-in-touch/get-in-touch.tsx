import React, { useEffect, useState } from "react";
import classes from "./get-in-touch.module.scss";
import axios from "axios";
import SubscribeSuccesPupup from "./get-in-touch-succses-popup/get-in-touch-succses-popup";
import "aos/dist/aos.css";
import AOS from "aos";

export default function GetInTouch() {
	const [email, setEmail] = useState<string>("");
	const [firstname, setFirstname] = useState<string>("");
	const [lastname, setLastname] = useState<string>("");
	const [bio, setBio] = useState<string>("");
	const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const isValidEmail = emailRegex.test(email.toLowerCase());

	const handleSubmi1t = async (e: any) => {
		e.preventDefault();
		setIsFormSubmitted(true);
		if (!firstname.length || !lastname.length || !isValidEmail || !bio.length) {
			return false;
		}
		await axios.post("/api/subscribe-to-letter", {
			email,
			lastname,
			firstname,
			bio,
		});
		setIsModalOpen(true);
	};

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<form
			data-aos="fade-up"
			data-aos-duration="2000"
			className={classes.getInTouchMainContainer}
			onSubmit={handleSubmi1t}
		>
			<div className={classes.seceondayFrom}>
				<div
					className={classes.mainFrom}
					style={{
						backgroundImage: `url(/images/for-nikusha.png)`,
					}}
				>
					<div className={classes.mainFormContainer}>
						<div className={classes.getInTouchText}> GET IN TOUCH WITH ME </div>
						<div>
							<input
								placeholder="Email*"
								className={classes.inputTextField}
								type="text"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
							{isFormSubmitted === true ? (
								<div>
									{isValidEmail ? null : (
										<label className={classes.error}>
											Never mind dude try to enter valid email
										</label>
									)}
								</div>
							) : null}
							<input
								placeholder="First Name*"
								className={classes.inputTextField}
								type="text"
								onChange={(e) => setFirstname(e.target.value)}
								value={firstname}
							/>
							{isFormSubmitted && firstname.length <= 0 ? (
								<label className={classes.error}>
									Never mind dude enter your first name
								</label>
							) : null}
							<input
								placeholder="Last Name*"
								className={classes.inputTextField}
								type="text"
								onChange={(e) => setLastname(e.target.value)}
								value={lastname}
							/>
							{isFormSubmitted && lastname.length <= 0 ? (
								<label className={classes.error}>
									Never mind dude enter your last name
								</label>
							) : null}
							<div>
								<textarea
									placeholder="What do you have to say"
									className={classes.whatDoYouWantToSayContainer}
									onChange={(e) => setBio(e.target.value)}
									value={bio}
								/>
							</div>
							<button
								className={classes.glowonhover}
								type="submit"
								onClick={() => {
									console.log("ASD");
								}}
							>
								SUBMIT
							</button>
						</div>
					</div>
				</div>
			</div>
			<SubscribeSuccesPupup
				isOpen={isModalOpen}
				handleClick={() => setIsModalOpen(false)}
			/>
		</form>
	);
}
