import { type Variants, motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export const SlideX = ({
	children,
	from = "left",
	duration = 0.9,
}: PropsWithChildren<{ from?: "left" | "right"; duration?: number }>) => {
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
		<motion.div
			viewport={{ once: true }}
			variants={variants}
			initial="hidden"
			whileInView="visible"
		>
			{children}
		</motion.div>
	);
};
