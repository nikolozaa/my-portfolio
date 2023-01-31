import { useEffect, useState } from "react";
import { DefaultHashLink } from "../default-router/default-hashlink";
import { useScrollPosition } from "../hooks/use-scroll-position";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import classes from "./menu.module.scss";

export function MainHeaderMenu(): JSX.Element {
	const [menuClosed, setMenuClosed] = useState<boolean>(true);
	const scrollPosition = useScrollPosition();
	const windowDimensions = useWindowDimensions();

	return (
		// <nav
		// 	className={`${classes.menu} ${
		// 		scrollPosition > windowDimensions.height - 5 ? classes.menuOpen : ""
		// 	}`}
		// >
		<nav
			className={`${classes.menu} ${
				scrollPosition > windowDimensions.height - 20 ? classes.menuOpen : ""
			}`}
		>
			<div className={classes.headerVisibilityForPhone}>
				<MainHeaderMenuButtons />
			</div>
			<div className={classes.mobileMenuContainer}>
				{/* <div className={classes.t}>Mother Dear </div> */}
				<div
					onClick={() => {
						setMenuClosed(true);
					}}
					className={`${classes.buttonsPopup} paper ${
						menuClosed ? classes.buttonsPopupClosed : ""
					}`}
				>
					<MainHeaderMenuButtons />
				</div>
				<img
					onClick={() => {
						setMenuClosed(!menuClosed);
					}}
					className={`${classes.iconMenu} ${
						!menuClosed ? classes.iconMenuOpen : ""
					}`}
					src="/menu-logo.svg"
				/>
			</div>
		</nav>
	);
}

export function MainHeaderMenuButtons(): JSX.Element {
	return (
		<div className={classes.menuMainContainer}>
			<div className={classes.menuItem}>
				<DefaultHashLink smooth to="/#home">
					HOME
				</DefaultHashLink>
			</div>
			<div className={classes.menuItem}>
				{" "}
				<DefaultHashLink smooth to="/#about-us">
					ABOUT
				</DefaultHashLink>
			</div>
			<div className={classes.menuItem}>
				{" "}
				<DefaultHashLink smooth to="/#screenshots">
					GALLERY
				</DefaultHashLink>
			</div>
			<div className={classes.menuItem}>
				{" "}
				<DefaultHashLink smooth to="/#footer">
					SUBSCRIBE
				</DefaultHashLink>
			</div>
			{/* <div className={classes.menuItem}> <DefaultHashLink smooth to="/#our-work">Our Work</DefaultHashLink></div> */}
		</div>
	);
}
