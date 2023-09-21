'use client';

import {useRef} from 'react';

export default function Grid({children}: {children: React.ReactNode}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="hidden sm:grid px-4 sm:px-0 items-stretch w-full grid-flow-col gap-4 sm:gap-10 overscroll-x-contain container-class transition-transform duration-300 scroll-snap-type-x mandatory scroll-smooth"
    >
      {children}
    </div>
  );
}
