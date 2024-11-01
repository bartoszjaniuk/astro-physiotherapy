type Props = {
  title: string;
};
export const Header = ({ title }: Props) => {
  return (
    <header className="h-32 md:h-56 w-full relative border-t-[1px] border-text md:border-none">
      <div className="h-full w-full flex items-center gap-8 mx-auto responsive-padding container">
        <h1 className="min-w-fit text-7xl xl:text-8xl 2xl:text-8xl text-text pb-6 border-b-2 border-b-primary">
          {title}
        </h1>
      </div>
    </header>
  );
};
