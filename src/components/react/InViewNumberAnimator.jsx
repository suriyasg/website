import { useEffect, useState, useRef } from "react";

export default function InViewNumberAnimator({ targetValue, duration = 2000 }) {
	const [currentValue, setCurrentValue] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const startTimeRef = useRef(null);
	const containerRef = useRef(null);

	const animate = (timestamp) => {
		if (!startTimeRef.current) {
			startTimeRef.current = timestamp;
		}

		const progress = timestamp - startTimeRef.current;
		const percentage = Math.min(progress / duration, 1);

		setCurrentValue(Math.floor(percentage * targetValue));

		if (progress < duration && isVisible) {
			requestAnimationFrame(animate);
		}
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 1,
		};

		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIsVisible(entry.isIntersecting);
		}, options);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		if (isVisible) {
			startTimeRef.current = null;
			requestAnimationFrame(animate);
		}
	}, [isVisible, targetValue]);

	return <div ref={containerRef}>{isVisible ? currentValue : 0}</div>;
}
