import { type Variants, motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export const SlideY = ({
	children,
	from = "bottom",
	duration = 0.9,
}: PropsWithChildren<{ from?: "bottom" | "top"; duration?: number }>) => {
	const slide = from === "bottom" ? 300 : -300;
	const variants: Variants = {
		hidden: { opacity: 1, scale: 0, transform: `translateY(${slide}px)` },
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
