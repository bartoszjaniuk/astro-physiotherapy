import { motion, type Variants } from "framer-motion";

export const Card = ({
	isInverted = false,
	imageSrc,
	description,
	variants,
}: {
	isInverted?: boolean;
	imageSrc: string;
	description: string;
	variants: Variants;
}) => {
	const styles = `${
		isInverted ? "bg-primary text-white" : "bg-text text-white md:-rotate-2"
	}`;

	return (
		<motion.li
			variants={variants}
			className={`flex flex-col gap-4 w-full md:w-[272px] lg:w-[400px] lg:h-full h-full md:h-[354px] xl:w-[272px] xl:h-[354px] border rounded-lg p-4 ${styles}`}
		>
			<img src={imageSrc} alt={description} />
			<p className="text-center text-4xl">{description}</p>
		</motion.li>
	);
};
