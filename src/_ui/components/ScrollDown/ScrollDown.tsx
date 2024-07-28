type Props = {
	onClick: VoidFunction;
};

export const ScrollDown = ({ onClick }: Props) => {
	return (
		<button className="scrolldown" onClick={onClick}>
			<div className="chevrons"></div>
		</button>
	);
};
