import { type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";
import { MotionComponent } from "./MotionComponent";

type Props = {
	from?: "left" | "right";
	duration?: number;
	className?: string;
	component?: React.ElementType;
};

export const SlideX = ({
	children,
	from = "left",
	duration = 0.9,
	className,
	component = "div",
}: PropsWithChildren<Props>) => {
	const slide = from === "left" ? -300 : 300;
	const variants: Variants = {
		hidden: { opacity: 1, scale: 0, transform: `translateX(${slide}px)` },
		visible: {
			transform: "none",
			opacity: 1,
			scale: 1,
			transition: {
				duration,
			},
		},
	};

	return (
		<MotionComponent
			as={component}
			className={className}
			viewport={{ once: true }}
			variants={variants}
			initial="hidden"
			whileInView="visible"
		>
			{children}
		</MotionComponent>
	);
};
