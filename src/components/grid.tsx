'use client';

import {useRef} from 'react';

export default function Grid({children}: {children: React.ReactNode}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="relative grid px-0 items-stretch w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-none lg:grid-flow-col gap-4 lg:gap-10 overscroll-x-contain container-class transition-transform duration-300 scroll-snap-type-x mandatory scroll-smooth"
    >
      {children}
    </div>
  );
}
