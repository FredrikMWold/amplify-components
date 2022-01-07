import { useEffect, useState } from 'react';

// https://stackoverflow.com/a/65008608
export default function useOnScreen(
  ref: { current: HTMLDivElement | null },
  threshold: number | number[] | undefined
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: '0px', threshold }
    );

    if (ref.current) observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersecting;
}