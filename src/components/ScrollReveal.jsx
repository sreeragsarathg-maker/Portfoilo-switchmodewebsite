import { useEffect, useRef } from 'react';

/**
 * Hook: returns a ref. The element becomes 'visible' when it enters the viewport.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Component: wraps children in a reveal element.
 */
export function Reveal({ children, delay = 0, className = '', ...props }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal${delay ? ` reveal-delay-${delay}` : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
