import { type Variants, motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { MotionComponent } from "./MotionComponent";

type Props = {
	from?: "bottom" | "top";
	duration?: number;
	className?: string;
	component?: React.ElementType;
};

export const SlideY = ({
	children,
	from = "bottom",
	duration = 0.9,
	className,
	component,
}: PropsWithChildren<Props>) => {
	const slide = from === "bottom" ? 100 : -100;
	const variants: Variants = {
		hidden: { opacity: 1, scale: 0, y: slide },
		visible: {
			y: 0,
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
