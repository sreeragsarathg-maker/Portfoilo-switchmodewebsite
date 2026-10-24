import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let rafId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const smoothOutline = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      outline.style.left = outlineX + 'px';
      outline.style.top = outlineY + 'px';
      rafId = requestAnimationFrame(smoothOutline);
    };

    const onMouseEnterLink = () => {
      dot.classList.add('hovered');
      outline.classList.add('hovered');
    };

    const onMouseLeaveLink = () => {
      dot.classList.remove('hovered');
      outline.classList.remove('hovered');
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    window.addEventListener('mousemove', moveCursor);
    rafId = requestAnimationFrame(smoothOutline);
    addHoverListeners();

    // Re-check on DOM mutations
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  // Only show on desktop
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  if (isMobile) return null;

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-outline" ref={outlineRef} aria-hidden="true" />
    </>
  );
}
