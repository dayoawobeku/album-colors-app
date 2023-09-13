'use client';

import {useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {arrowRight} from '@/assets/images';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Draggable rootClass={'drag'}>
      <div
        ref={containerRef}
        className="mt-[104px] hidden sm:grid px-4 sm:px-0 items-stretch w-full grid-flow-col gap-4 sm:gap-10 overscroll-x-contain container-class transition-transform duration-300 scroll-snap-type-x mandatory scroll-smooth"
      >
        <div className="bg-grey-800 w-[calc(100vw-72.22vw)] h-[calc(100vw-68.7vw)] rounded"></div>
        <div className="bg-grey-800 w-[calc(100vw-72.22vw)] h-[calc(100vw-68.7vw)] rounded"></div>
        <div className="bg-grey-800 w-[calc(100vw-72.22vw)] h-[calc(100vw-68.7vw)] rounded"></div>
        <div className="bg-grey-800 w-[calc(100vw-72.22vw)] h-[calc(100vw-68.7vw)] rounded"></div>
        <div className="flex items-center justify-center gap-1 whitespace-nowrap group m-auto">
          <Link href="/" className="text-grey text-sm font-bold uppercase">
            See all albums
          </Link>
          <Image
            src={arrowRight}
            alt="arrow right"
            width={46}
            height={18}
            className="transition-all duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Draggable>
  );
}

const Draggable = ({
  rootClass = '',
  children,
}: {
  rootClass: string;
  children: React.ReactNode;
}) => {
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
        ' flex overflow-x-scroll container-class transition-transform duration-300 scroll-snap-type-x mandatory scroll-smooth'
      }
    >
      {children}
    </div>
  );
};
