import { Column, type ColumnProps } from "./components/Column";

const FOOTER_CONTACT: ColumnProps = {
	heading: "Kontakt",
	gridColumn: "1/2",
	entries: [
		{
			type: "normal",
			content: "Akademia Fitness",
		},
		{
			type: "normal",
			content: "ul. Ocicka 4, 47-400 Racibórz",
		},
		{
			type: "normal",
			content: "Numer telefonu",
		},
		{
			type: "normal",
			content: "+ 48 515 693 553",
		},
	],
};

const FOOTER_OFFERT: ColumnProps = {
	heading: "Oferta",
	gridColumn: "3/4",
	entries: [
		{
			type: "link",
			content: "Uslugi",
			link: "/",
		},
		{
			type: "link",
			content: "Zabiegi",
			link: "/",
		},
		{
			type: "link",
			content: "Cennik",
			link: "/",
		},
	],
};

const FOOTER_ABOUT: ColumnProps = {
	heading: "O mnie",
	gridColumn: "3/4",
	entries: [
		{
			type: "link",
			content: "Wyksztalcenie",
			link: "/",
		},
		{
			type: "link",
			content: "Jak wygląda wizyta",
			link: "/",
		},
		{
			type: "link",
			content: "Przed wizytą",
			link: "/",
		},
	],
};

const Footer = () => {
	return (
		<footer className="w-full bg-text text-white h-full ">
			<div className="container mx-auto h-full primary-selection bg-inherit">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-2 py-8 responsive-padding bg-inherit text-inherit">
					<Column {...FOOTER_CONTACT} />
					<Column {...FOOTER_OFFERT} />
					<Column {...FOOTER_ABOUT} />
				</div>
			</div>
			<div className="w-full text-white lg:h-16 flex lg:items-center py-4 bg-primary">
				<div className="container mx-auto responsive-padding flex flex-col lg:flex-row lg:items-center justify-between gap-2 bg-inherit">
					<h5 className="text-xl sm:text-base 2xl:text-2xl font-light bg-inherit font-questrial">
						© 2024 Trębacz Fizjoterapia
					</h5>
					<div className="flex flex-col lg:flex-row text-xl sm:text-base 2xl:text-2xl  font-light gap-2 h-full hover:cursor-pointer bg-inherit">
						<a
							className=" lg:border-r-[1px] lg:border-r-white lg:pr-2 bg-inherit font-questrial"
							href="/"
							target="_blank"
						>
							Regulamin i RODO
						</a>

						<a className="bg-inherit font-questrial" href="/cookies">
							Polityka prywatności i cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
