import classes from "./subscribe.module.scss";
import { useState } from "react";
import { DefaultHashLink } from "../default-router/default-hashlink";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import axios from "axios";

export function Subscribe(): JSX.Element {
	const [email, setEmail] = useState<string>("");
	const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
	const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [message, setMessage] = useState("");
	const [errorr, setErrorr] = useState("");

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
	};

	const checkEmail = (e: any) => {
		setEmail(e.target.value);
		if (emailRegex.test(email) === false) {
			setErrorr("Please enter valid mail");
		} else {
			setErrorr("");
			return true;
		}
	};

	const submit = () => {
		if (email != "") {
			setMessage("thanks for sub " + email);
		} else {
			setErrorr("Email cant be blank");
		}
		console.log("CLickec");
	};

	return (
		<form className={classes.subscribeMainContainer} onSubmit={handleSubmit}>
			<div className={classes.row}>
				<div className={classes.text}>Subscribe To Newsletter</div>
				{isFormSubmitted === true ? (
					<>
						{isValidEmail ? (
							<div className={classes.idk}>
								<input
									className={classes.inputTextField}
									placeholder="your-mail@mail.com"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									// setEmail("");
								/>
								{/* <div className={classes.subsciptionMessage}>
									Thanks for subscription
								</div> */}
							</div>
						) : (
							<input
								className={classes.deniedMail}
								placeholder="your-mail@mail.com"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						)}
					</>
				) : (
					<input
						className={classes.inputTextField}
						placeholder="your-mail@mail.com"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				)}
				<button
					type="submit"
					className={classes.button}
					disabled={isSendingEmail}
					onClick={async () => {
						setIsFormSubmitted(true);
						setIsSendingEmail(true);
						const a = await axios.post("/api/subscribe-to-letter", {
							email,
						});
						console.log(a.status);
						setIsSendingEmail(false);
						console.log(a);
						// setEmail("");
						// notify();
					}}
				>
					Subscribe
				</button>
			</div>

			<div className={classes.textThanking}>
				{isFormSubmitted === true ? (
					<>
						{isValidEmail ? (
							<div className={classes.subsciptionMessage}>
								Thanks for subscription
							</div>
						) : null}
					</>
				) : null}
			</div>

			{/* {error ? "Please enter valid mail" : null} */}
		</form>
	);
}

{
	/* <input
					className={isValidEmail ? classes.inputTextField : classes.deniedMail}
					placeholder="yourmail@mail.com"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/> */
}

// 			<form className={classes.subscribeMainContainer} onSubmit={handleSubmit}>
// 						<div className={classes.row}>
// 		<div className={classes.text}>Subscribe To Newsletter</div>
// 		{isFormSubmitted === true ? (
// 			<>
// 				{isValidEmail ? (
// 					<div className={classes.idk}>
// 						<input
// 							className={classes.inputTextField}
// 							placeholder="your-mail@mail.com"
// 							onChange={(e) => setEmail(e.target.value)}
// 							value={email}
// 							// setEmail("");
// 						/>
// 						{/* <div className={classes.subsciptionMessage}>
// 							Thanks for subscription
// 						</div> */}
// 					</div>
// 				) : (
// 					<input
// 						className={classes.deniedMail}
// 						placeholder="your-mail@mail.com"
// 						onChange={(e) => setEmail(e.target.value)}
// 						value={email}
// 					/>
// 				)}
// 			</>
// 		) : (
// 			<input
// 				className={classes.inputTextField}
// 				placeholder="your-mail@mail.com"
// 				onChange={(e) => setEmail(e.target.value)}
// 				value={email}
// 			/>
// 		)}
// 		<button
// 			type="submit"
// 			className={classes.button}
// 			disabled={isSendingEmail}
// 			onClick={async () => {
// 				setIsFormSubmitted(true);
// 				setIsSendingEmail(true);
// 				const a = await axios.post("/api/subscribe-to-letter", {
// 					email,
// 				});
// 				console.log(a.status);
// 				setIsSendingEmail(false);
// 				console.log(a);
// 				// setEmail("");
// 				// notify();
// 			}}
// 		>
// 			Subscribe
// 		</button>
// 		</div>

// 			<div className={classes.textThanking}>
// 		{isFormSubmitted === true ? (
// 			<>
// 				{isValidEmail ? (

// 						<div className={classes.subsciptionMessage}>
// 							Thanks for subscription
// 						</div>
// 				) : (
// 					null
// 				)}
// 			</>
// 		) : (
// 			null
// 		)}
// 		</div>

// 				<input onChange={checkEmail}></input>
// 				<button onClick={submit}>Click</button>

// 		{/* <input
//     id="message"
//     name="message"
//     value={message}
//     onChange={handleChange}
//   />

//   {errorr && <h2 style={{color: 'red'}}>{errorr}</h2>} */}

// 		{/* {error ? "Please enter valid mail" : null} */}
// 	</form>

// <div className={classes.subscribeMainContainer} >

// 				<input
// 					// onChange={(e) => setEmail(e.target.value)}
// 					value={email}
// 					onChange={checkEmail}/>
// 					{errorr}
// 				<button type="submit" onClick={submit}>Click</button>
// 				{message}

// 		{/* <input
//     id="message"
//     name="message"
//     value={message}
//     onChange={handleChange}
//   />

//   {errorr && <h2 style={{color: 'red'}}>{errorr}</h2>} */}

// 		{/* {error ? "Please enter valid mail" : null} */}
// 	</div>
