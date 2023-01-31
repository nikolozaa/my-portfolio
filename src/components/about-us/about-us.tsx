import { DefaultHashLink } from "../default-router/default-hashlink";
import { Subscribe } from "../subscribe-component/subcribe";
import classes from "./about-us.module.scss";

export default function AboutUs(): JSX.Element {
	return (
		<div className={classes.body}>
			<div className={classes.test}>
				<div className={classes.textArea}>
					<div className={classes.aboutGame}>
						&quot;Mother Dear&quot; is an adventure/exploration game, scheduled
						to be released in 2023
					</div>
					<div className={classes.subscribeContainer}>
						Subscribe below for news!
					</div>
				</div>
				<div className={classes.subscribe}>
					<Subscribe />
				</div>
			</div>
		</div>
	);
}
