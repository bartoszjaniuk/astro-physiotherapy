import { motion, type MotionProps } from "framer-motion";

export type MotionComponentProps<T extends React.ElementType> = {
	as?: T;
} & MotionProps &
	React.ComponentPropsWithoutRef<T>;

export const MotionComponent = <T extends React.ElementType>({
	as,
	...props
}: MotionComponentProps<T>) => {
	const Component = as || "div";

	const MotionCustomComponent = motion(Component);

	return <MotionCustomComponent {...props} />;
};
