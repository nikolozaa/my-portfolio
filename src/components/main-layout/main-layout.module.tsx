import { useEffect, useState } from "react";
import { MainFooter } from "../footer/footer.module";
import { MainHeader } from "../header/header.module";
import classes from "./main-layout.module.scss";
interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): JSX.Element {
	const [displayChildren, setDisplayChildren] =
		useState<React.ReactNode>(children);
	const [transitionStage, setTransitionStage] = useState<string>("fadeOut");
	useEffect(() => {
		setTransitionStage("fadeIn");
	}, []);

	useEffect(() => {
		if (children !== displayChildren) {
			setTransitionStage("fadeOut");
		}
	}, [children, displayChildren]);

	return (
		<div id="mainContainer" className={classes.mainContainer}>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<MainHeader isLoading={transitionStage === "fadeOut" ? true : false} />
			<div
				onTransitionEnd={() => {
					if (transitionStage === "fadeOut") {
						setDisplayChildren(children);
						setTransitionStage("fadeIn");
					}
				}}
				className={`${classes.mainBodyContainer} ${classes[transitionStage]}`}
			>
				{displayChildren}
			</div>
			<MainFooter />
		</div>
	);
}
