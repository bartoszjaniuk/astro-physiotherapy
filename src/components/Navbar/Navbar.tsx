import * as React from "react";
import { MENU_LINKS } from "./constants/mentLinks";
import ResponsiveLinks from "./components/ResponsiveLinks";

type Props = {
	currentPath: string;
};

const makePathFromLink = (path: string) => path.slice(1).replace(" ", "-");

const Navbar = ({ currentPath }: Props) => {
	console.log(currentPath, "currentPath");
	return (
		<div className="bg-bgColor w-full fixed z-50 ">
			<nav className="container responsive-padding mx-auto h-24 flex items-center justify-between gap-16 relative ">
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
						const isActive = currentPath === makePathFromLink(link.path);
						return (
							<a
								className={`relative text-xl md:text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap  ${
									isActive ? "text-primary" : null
								}`}
								key={index}
								href={link.path}
							>
								{link.title}
							</a>
						);
					})}
				</div>
				<div className="hidden lg:flex gap-4  h-[96px]">
					<img width={24} src="/assets/ig.svg" alt="Instagram Profile" />
					<img width={24} src="/assets/fb.svg" alt="Facebook Profile" />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
