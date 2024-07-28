import { useEffect, useState, useRef, type RefObject } from "react";

/**
 * Custom Hook to determine if an element is in the viewport.
 * @param rootMargin Margin around the root, similar to the CSS margin property.
 * @returns A boolean state indicating visibility.
 */
export const useInView = (
	ref: RefObject<HTMLElement>,
	rootMargin: string = "0px",
) => {
	const [isInView, setInView] = useState(false);

	// Use a single instance of IntersectionObserver
	const observerRef = useRef<IntersectionObserver>();

	useEffect(() => {
		if (observerRef.current) {
			observerRef.current.disconnect(); // Disconnect previous observer if it exists
		}

		observerRef.current = new IntersectionObserver(
			(entries) => {
				// Set state based on whether the element is intersecting
				setInView(entries[0].isIntersecting);
			},
			{ rootMargin },
		);

		const { current } = ref;
		if (current) {
			observerRef.current.observe(current);
		}

		return () => {
			observerRef.current?.disconnect();
		};
	}, [ref, rootMargin]); // Re-run effect if ref or rootMargin changes

	return isInView;
};
