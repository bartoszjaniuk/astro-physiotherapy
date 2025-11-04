import React from "react";
import { motion } from "framer-motion";
import { BOOKSY_URL } from "../../_constants/socialMedia";

export const FloatingBooksy = () => {
	return (
		<a href={BOOKSY_URL} className="hidden md:block fixed left-4 top-72 z-50">
			<motion.div
				className="flex flex-col justify-center  gap-4"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
			>
				<button className="text-sm bg-primary hover:bg-primaryDark text-white font-bold py-2 px-4 border border-primary hover:border-transparent rounded">
					REZERWUJ
				</button>
				<img width={100} src="/assets/booksy.png" alt="Profil na Booksy" />
			</motion.div>
		</a>
	);
};
