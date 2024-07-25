type Props = {
	title: string;
};
export const Header = ({ title }: Props) => {
	return (
		<header className="h-32 md:h-56 w-full relative border-t-[1px] border-text md:border-none">
			<div className="h-full w-full flex items-center gap-8 mx-auto responsive-padding container">
				<span className="w-full h-[2px] bg-text hidden md:block"></span>
				<h1 className="min-w-fit text-7xl md:text-9xl lg:text-9xl xl:text-8xl 2xl:text-8xl text-text">
					{title}
				</h1>
				<span className="w-full h-[2px] bg-text hidden md:block"></span>
			</div>
		</header>
	);
};
