import { useEffect, useState } from "react";
import { HashLink, HashLinkProps } from "react-router-hash-link";

export function DefaultHashLink({
	children,
	...props
}: HashLinkProps): JSX.Element {
	const [hashLinkTag, setHashLinkTag] = useState<React.ReactNode>(
		<>{children}</>,
	);

	useEffect(() => {
		setHashLinkTag(<HashLink {...props}>{children}</HashLink>);
	}, []);

	return <>{hashLinkTag}</>;
}
