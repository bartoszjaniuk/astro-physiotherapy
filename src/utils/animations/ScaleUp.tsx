import { type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";
import { MotionComponent } from "./MotionComponent";

export const ScaleUp = ({
	children,
	component,
	className,
}: PropsWithChildren<{
	component?: React.ElementType;
	className?: string;
}>) => {
	const variants: Variants = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.9,
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
