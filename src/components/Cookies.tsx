import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { storage } from "../utils/storage";

const Cookies = () => {
	const [cookie, setCookie] = useState(storage.getItem("cookie"));
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const cookie = localStorage.getItem("cookie");
		if (cookie) {
			setIsVisible(true);
			setCookie(cookie);
		} else {
			setIsVisible(false);
		}
	}, []);

	const handleSetCookie = () => {
		const cookie = new Date().toUTCString();
		storage.setItem("cookie", cookie);
		setCookie(cookie);
	};

	return (
		<>
			{!cookie && !isVisible ? (
				<div className="w-full cookies">
					<img
						src="/assets/ggglitch.svg"
						alt="ggglitch circular shape"
						className="absolute top-[80%] h-[50%] lg:left-0 lg:top-[50%] z-[49] lg:h-full"
					/>
					<div className="container mx-auto responsive-padding flex gap-4 bg-navbar py-16">
						<div>
							<Icon icon="twemoji:cookie" width={70} />
						</div>
						<div className="flex flex-col gap-2">
							<p>
								Ta strona wykorzystuje pliki cookie zgodnie z{" "}
								<a href="/cookies" className="text-primary underline">
									polityką cookies.
								</a>
								Używamy informacji zapisanych za pomocą plików cookie w celu
								zepewnienia jak najlepszej wygody podczas korzystania z serwisu.{" "}
							</p>
							<button
								onClick={handleSetCookie}
								className="border rounded-lg p-2 bg-primary text-white w-32 hover:bg-secondary transition ease-in-out duration-300"
							>
								Rozumiem
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Cookies;
