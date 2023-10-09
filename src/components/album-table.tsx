'use client';

import {useState} from 'react';
import {hexToRgb} from '@/helpers/hex-to-rgb';
import {Album} from '@/types';

export default function AlbumTable({album}: {album: Album}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (index: number, type: string) => {
    const palette = album.palettes[index];

    if (type === 'hex') {
      navigator.clipboard.writeText(palette);
    } else if (type === 'rgb') {
      navigator.clipboard.writeText(`rgb(${hexToRgb(palette)})`);
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>
      <div
        className={`absolute bottom-9 sm:bottom-5 lg:bottom-auto lg:-top-6 left-1/2 -translate-x-[70%] uppercase opacity-0 transition-opacity duration-300 ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-xs font-semibold text-grey">copied</p>
      </div>
      <div className="border border-1 border-grey-500 px-2 lg:px-10 pt-4 relative flex items-start justify-between">
        <div className="flex flex-col items-center justify-between">
          <p className="uppercase font-bold text-sm text-grey pb-4">color</p>
          {album.palettes.map((palette, index) => (
            <div
              onClick={() => handleCopy(index, 'hex')}
              key={index}
              className="py-4 cursor-pointer"
            >
              <div
                className="w-[60px] h-5"
                style={{backgroundColor: palette}}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="uppercase font-bold text-sm text-grey pb-4">hex</p>
          {album.palettes.map((palette, index) => (
            <div
              onClick={() => handleCopy(index, 'hex')}
              key={index}
              className="text-grey-700 font-medium text-sm py-4 cursor-pointer"
            >
              {palette.replace('#', '').toUpperCase()}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="uppercase font-bold text-sm text-grey pb-4">rgb</p>
          {album.palettes.map((palette, index) => (
            <div
              onClick={() => handleCopy(index, 'rgb')}
              key={index}
              className="text-grey-700 font-medium text-sm py-4 cursor-pointer"
            >
              {hexToRgb(palette)}
            </div>
          ))}
        </div>
        <div className="h-[0.5px] w-full bg-grey-500 absolute top-[16.6%] -mx-2 lg:-mx-10" />
        <div className="h-[0.5px] w-full bg-grey-500 absolute top-[33.1%] -mx-2 lg:-mx-10" />
        <div className="h-[0.5px] w-full bg-grey-500 absolute top-[49.7%] -mx-2 lg:-mx-10" />
        <div className="h-[0.5px] w-full bg-grey-500 absolute top-[66.2%] -mx-2 lg:-mx-10" />
        <div className="h-[0.5px] w-full bg-grey-500 absolute top-[82.8%] -mx-2 lg:-mx-10" />
      </div>
    </>
  );
}
