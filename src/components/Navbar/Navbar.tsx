import * as React from "react";
import { MENU_LINKS } from "./constants/mentLinks";
import ResponsiveLinks from "./components/ResponsiveLinks";

const Navbar = () => {
	return (
		<div className="bg-transparent  w-full fixed z-50 ">
			<nav className="container responsive-padding mx-auto h-24 flex items-center justify-between gap-16">
				<a href="/">
					<img
						src="/assets/logo.png"
						className="w-48 mr-4"
						alt="Sprzęt Stomatologiczny Logo"
					/>
				</a>
				<ResponsiveLinks />
				<div className="links">
					{MENU_LINKS.map((link, index) => {
						return (
							<a
								className="relative text-xl md:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap font-thin"
								key={index}
								href={link.path}
							>
								{link.title}
							</a>
						);
					})}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
