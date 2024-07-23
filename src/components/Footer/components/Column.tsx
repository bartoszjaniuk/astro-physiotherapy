type Entry =
	| {
			type: "normal";
			content: string;
	  }
	| {
			type: "link";
			content: string;
			link: string;
	  }
	| {
			type: "contact";
			icon: "phone" | "mail";
			content: string;
			title?: string;
	  };

export type ColumnProps = {
	heading: string;
	entries: Entry[];
	gridColumn: string;
};

const getColStartAndEnd = (gridColumn: string) => {
	const [start, end] = gridColumn.split("/");
	return { start, end };
};

export const Column = ({ entries, heading, gridColumn }: ColumnProps) => {
	const { start, end } = getColStartAndEnd(gridColumn);
	return (
		<div
			className={`md:col-start-${start} md:col-end-${end} flex flex-col gap-2 w-full bg-inherit text-white font-questrial`}
		>
			<h5 className="text-xl sm:text-lg 2xl:text-2xl font-bold text-start pb-2 text-white font-questrial border-b-2 border-b-primary w-24 mb-2">
				{heading}
			</h5>
			{entries.map((entry, index) => {
				if (entry.type === "normal")
					return (
						<p
							key={index}
							className="text-sm sm:text-base 2xl:text-lg font-thin  text-start text-white"
						>
							{entry.content}
						</p>
					);
				if (entry.type === "link")
					return (
						<a
							key={index}
							className="text-sm sm:text-base 2xl:text-lgfont-medium text-start text-white"
							href={entry.link}
						>
							{entry.content}
						</a>
					);
				if (entry.type === "contact")
					return (
						<div
							key={index}
							className="flex flex-col gap-4 text-white border border-white"
						>
							{entry.title && (
								<h5 className="text-sm sm:text-base 2xl:text-lg font-medium text-start text-white  border-b-white border-b-2">
									{entry.title}
								</h5>
							)}
							<div key={index} className="flex gap-1 items-center text-white">
								{entry.icon === "phone" && (
									<>
										<p className="text-sm sm:text-base 2xl:text-lg text-white">
											Tel.
										</p>
										<a
											className="text-sm sm:text-base 2xl:text-lg text-white"
											href={`tel:${entry.content}`}
										>
											{entry.content}
										</a>
									</>
								)}
								{entry.icon === "mail" && (
									<>
										<p className="text-sm sm:text-base 2xl:text-lg text-white">
											Mail:
										</p>
										<a
											className="text-sm sm:text-base 2xl:text-lg underline text-white"
											href={`mailto:${entry.content}`}
										>
											{entry.content}
										</a>
									</>
								)}
							</div>
						</div>
					);
			})}
		</div>
	);
};
