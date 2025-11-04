import React from "react";
import { motion } from "framer-motion";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../_constants/socialMedia";

export const FloatingIcons = () => {
	return (
		<div className="fixed right-4 top-28 z-50">
			<ul className="hidden lg:flex lg:flex-col gap-2 h-[96px] list-none items-center ">
				<motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<a href={INSTAGRAM_URL} className="cursor-pointer ">
						<img width={34} src="/assets/ig.svg" alt="Profil na Instagram" />
					</a>
				</motion.li>
				<motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<a href={FACEBOOK_URL} className="cursor-pointer ">
						<img width={34} src="/assets/fb.svg" alt="Profil na Facebook" />
					</a>
				</motion.li>
			</ul>
		</div>
	);
};
