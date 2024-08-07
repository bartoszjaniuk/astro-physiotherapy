import * as React from "react";

const breakPoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xxl: 1536,
} as const;

type Breakpoints = keyof typeof breakPoints;

export const useWindowUtils = () => {
	const [screenWidth, setScreenWidth] = React.useState<Breakpoints | undefined>(
		undefined,
	);

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				if (
					window.innerWidth >= breakPoints.sm &&
					window.innerWidth < breakPoints.md
				)
					setScreenWidth("sm");
				if (
					window.innerWidth >= breakPoints.md &&
					window.innerWidth <= breakPoints.lg
				)
					setScreenWidth("md");
				if (
					window.innerWidth >= breakPoints.lg &&
					window.innerWidth <= breakPoints.xl
				)
					setScreenWidth("lg");
				if (
					window.innerWidth >= breakPoints.xl &&
					window.innerWidth <= breakPoints.xxl
				)
					setScreenWidth("xl");
				if (window.innerWidth >= breakPoints.xxl) setScreenWidth("xxl");
			};

			window.addEventListener("resize", handleResize);
		}
	}, []);

	return screenWidth;
};
