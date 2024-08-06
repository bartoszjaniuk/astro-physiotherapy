import { type Variants, motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export const ScaleUp = ({ children }: PropsWithChildren) => {
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
