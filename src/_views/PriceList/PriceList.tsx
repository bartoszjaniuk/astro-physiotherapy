import { Header } from "../../components/Header/Header";

type PriceList = {
	title: string;
	price: string;
	description?: string;
};

const PRICE_LIST: PriceList[] = [
	{
		title: "Osteopatia 40 min",
		price: "200 zł",
		description:
			"terapia strukturalna, terapia trzewna, terapia czaszkowo-krzyżowa",
	},
	{
		title: "Fizjoterapia pediatryczna 45 min",
		price: "200 zł",
		description:
			"Instruktarz pielęgnacji, terapia NDT-Bobath, ocena rozwoju niemowląt, kinesiotaping",
	},
	{
		title: "Stała terapia NDT-Bobath 45 min",
		price: "180 zł",
		description: "",
	},
	{
		title: "Diagnostyka metodą Prechtla",
		price: "200 zł",
		description:
			"W celu umówienia się wymagany kontakt mailowy lub przez Messenger.",
	},
	{
		title: "PhysioKobido - 90 min",
		price: "300 zł",
		description:
			"Zabieg PhysioKobido składa się zarówno z masażu liftingującego twarzy, jak i opracowania największych napięć na ciele za pomocą technik fizjoterapeutycznych. Poprzez pracę na różnych obszarach ciała eliminuje się zaburzenia, które mają odzwierciedlenie w wyglądzie twarzy. Lifting na twarzy to elementy terapii rehabilitacji twarzy, terapii mięśniowo-powięziowej, terapii punktów spustowych czy masażu japońskiego. Zabieg dobierany jest indywidualnie, pod dany problem pacjenta. Efekty są jeszcze bardziej spektakularne, niż tylko po masażu na twarzy.",
	},
	{
		title: "Kobido - 60 min",
		price: "200 zł",
		description:
			"Masaż kobido to najpopularniejszy masaż liftingujący twarzy. Jest to intensywna terapia manualna, która poprzez rozluźnianie głębokich tkanek wpływa na efekt zmniejszenia widoczności zmarszczek oraz poprawy owalu twarzy.",
	},
	{
		title: "Fizjoterapia Stomatologiczna - 45 min",
		price: "200 zł",
		description:
			"Borykasz się z bruksizmem, zaciskaniem szczęki lub bólem żwaczy? Słyszysz trzaskania, chrupania i przeskakiwania podczas otwierania buzi? A może masz bóle głowy? Jeśli tak, to ta terapia jest właśnie dla Ciebie. Fizjoterapia stomatologiczna umożliwia zniwelowanie dolegliwości związanych z nieprawidłową pracą stawów skroniowo-żuchwowych. Odbywa się to przy pomocy technik relaksacji okolic stawu i mięśni narządu żucia. Terapia nie kończy się tylko w okolicy problemu, ale fizjoterapeuta patrzy na problem całościowo, szukając przyczyny powstania problemu, a nie tylko niwelowaniu jego objawów. Na pierwszej wizycie wykonywany jest dokładny wywiad i terapia. Ilość spotkań zależna jest od stanu zdrowia danego pacjenta.",
	},
];

const PriceListItem = ({ price, title, description }: PriceList) => {
	return (
		<div className="flex flex-col gap-7">
			<div className="flex gap-4">
				<div className="flex gap-4 w-full items-center">
					<h3 className="min-w-fit font-bold font-lct text-xl">{title}</h3>
					<span className="w-full h-[1px] bg-text"></span>
				</div>
				<p className="min-w-fit font-bold font-lct text-xl">{price}</p>
			</div>
			<p className="font-lct">{description}</p>
		</div>
	);
};

export const PriceList = () => {
	return (
		<main className="w-full min-h-screen md:min-h-full max-h-full relative">
			<div className="container responsive-padding mx-auto pb-32">
				<Header title="Cennik" />
				<section className="flex flex-col gap-8">
					{PRICE_LIST.map((item, index) => (
						<PriceListItem key={index} {...item} />
					))}
				</section>
			</div>
		</main>
	);
};
