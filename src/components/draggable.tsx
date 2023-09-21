'use client';

import {useRef, useState} from 'react';

export default function Draggable({
  rootClass = '',
  children,
}: {
  rootClass: string;
  children: React.ReactNode;
}) {
  const ourRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const handleDragStart = (e: {pageX: number}) => {
    if (!ourRef.current) return;
    const slider = ourRef.current;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = {startX, scrollLeft};
    setIsMouseDown(true);
    document.body.style.cursor = 'grabbing';
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    document.body.style.cursor = 'default';
  };

  const handleDrag = (e: {preventDefault: () => void; pageX: number}) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={
        rootClass +
        ' mt-[104px] flex overflow-x-scroll container-class transition-transform duration-300 scroll-snap-type-x mandatory scroll-smooth'
      }
    >
      {children}
    </div>
  );
}
