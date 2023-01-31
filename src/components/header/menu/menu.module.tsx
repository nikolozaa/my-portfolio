import Link from "next/link";
import { useState } from "react";
import classes from "./menu.module.scss";

export function MainHeaderMenu(): JSX.Element {
	const [menuClosed, setMenuClosed] = useState<boolean>(true);
	return (
		<nav className={classes.menu}>
			<div className={classes.buttons}>
				<MainHeaderMenuButtons />
			</div>
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
		</nav>
	);
}

export function MainHeaderMenuButtons(): JSX.Element {
	return (
		<>
			<div className={classes.menuItem}>
				<Link href="/projects">Projects</Link>
			</div>
			<div className={classes.menuItem}>
				<Link href="/members">Members</Link>
			</div>
			<div className={classes.menuItem}>
				<Link href="/about-us">About Us </Link>
			</div>
		</>
	);
}
