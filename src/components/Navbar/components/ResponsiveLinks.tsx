import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { MENU_LINKS } from "../constants/mentLinks";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../../_constants/socialMedia";

const navigationVariant: Variants = {
	hidden: {
		y: "-100px",
		height: 0,
		x: "100%",
		transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
		clipPath: `circle(30px at 40px 40px)`,
	},
	visible: {
		clipPath: `circle(100vh at 40px 40px)`,
		height: "100vh",
		y: 0,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 30,
			restDelta: 2,
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const staggerItemVariant: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const ResponsiveLinks = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggleButton = () => setIsOpen((prev) => !prev);

	React.useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isOpen]);

	return (
		<>
			<ToggleButton onClick={toggleButton} isOpen={isOpen} />
			<NavigationList isOpen={isOpen}>
				{MENU_LINKS.map((link, index) => (
					<NavigationLink key={index} {...link} />
				))}
				<SocialIcons />
			</NavigationList>
		</>
	);
};

const ToggleButton = ({
	onClick,
	isOpen,
}: {
	onClick: VoidFunction;
	isOpen: boolean;
}) => {
	return (
		<button className="burger z-40" onClick={onClick}>
			<span className={`${isOpen ? "opened" : ""} line`} />
			<span className={`${isOpen ? "opened" : ""} line`} />
			<span className={`${isOpen ? "opened" : ""} line`} />
		</button>
	);
};

const NavigationLink = ({ path, title }: { title: string; path: string }) => {
	return (
		<motion.li
			variants={staggerItemVariant}
			className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
		>
			<a href={path}>{title}</a>
		</motion.li>
	);
};

const SocialIcons = () => (
	<ul className="flex md:flex gap-8 list-none">
		<motion.li
			variants={staggerItemVariant}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<a href={INSTAGRAM_URL} className="cursor-pointer">
				<img width={32} src="/assets/ig.svg" alt="Profil na Instagram" />
			</a>
		</motion.li>
		<motion.li
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			variants={staggerItemVariant}
		>
			<a href={FACEBOOK_URL} className="cursor-pointer">
				<img width={32} src="/assets/fb.svg" alt="Profil na Facebook" />
			</a>
		</motion.li>
	</ul>
);

const NavigationList = ({
	children,
	isOpen,
}: React.PropsWithChildren<{ isOpen: boolean }>) => (
	<motion.ul
		initial="hidden"
		animate={isOpen ? "visible" : "hidden"}
		variants={navigationVariant}
		className="text-2xl absolute top-[95px] w-full bg-bgColor left-0 lg:hidden py-8  flex flex-col gap-10 overflow-y-scroll items-center my-auto"
	>
		{children}
	</motion.ul>
);
