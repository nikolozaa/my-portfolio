import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class DefaultRouterProps {
	children: React.ReactNode | React.ReactNode[];
}
export function DefaultRouter({ children }: DefaultRouterProps): JSX.Element {
	useEffect(() => {
		var hash = window.location.hash;
		if (hash) {
			var element = document.querySelector(hash);
			console.log(element);
			if (element) {
				setTimeout(() => {
					element?.scrollIntoView({
						behavior: "smooth",
					});
				}, 500);
			}
		} else {
			window.scrollTo(0, 0);
		}
	}, []);

	if (typeof window !== "undefined") {
		return <Router>{children}</Router>;
	}
	return <>{children}</>;
}
