import { motion, type Variants } from "framer-motion";
import type { Item } from "../../_views/Home/Home";
import { Card } from "../../_views/Home/components/Card";
import { useWindowUtils } from "../../_views/Home/hooks/useWindowUtils";

const listVariant: Variants = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariant: Variants = {
	hidden: { y: 10, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const AnimatedList = ({
	className,
	items,
}: {
	className?: string;
	items: Item[];
}) => {
	const screenWidth = useWindowUtils();
	return (
		<motion.ul
			className={className}
			variants={listVariant}
			initial="hidden"
			viewport={{
				once: true,
				margin: "350px",
				amount: 0.5,
			}}
			whileInView="visible"
		>
			{items.map((item) => {
				if (item.id % 2 === 0)
					return (
						<Card
							variants={itemVariant}
							key={item.id}
							imageSrc={item.imageSrc}
							description={item.description}
							isInverted
						/>
					);
				return (
					<Card
						variants={itemVariant}
						key={item.id}
						imageSrc={item.imageSrc}
						description={item.description}
					/>
				);
			})}
		</motion.ul>
	);
};
