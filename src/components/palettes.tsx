'use client';

import {useState} from 'react';
import {hexToRgb} from '@/helpers/hex-to-rgb';
import {Album, Artist} from '@/types';

export default function Palettes({
  allAlbums,
  data,
}: {
  allAlbums: Album[];
  data: Artist[];
}) {
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);

  const nextPalette = () => {
    if (currentPaletteIndex < allAlbums.length - 1) {
      setCurrentPaletteIndex(currentPaletteIndex + 1);
    } else {
      setCurrentPaletteIndex(0);
    }
  };

  const previousPalette = () => {
    if (currentPaletteIndex > 0) {
      setCurrentPaletteIndex(currentPaletteIndex - 1);
    } else {
      setCurrentPaletteIndex(allAlbums.length - 1);
    }
  };

  function generateCSSCode(
    artistName: string,
    albumTitle: string,
    palettes: string[],
  ) {
    let cssCode = `/* Custom CSS Palette for ${artistName} - ${albumTitle} */\n\n`;

    for (let i = 0; i < palettes.length; i++) {
      const palette = palettes[i];
      const colorNumber = i + 1;

      cssCode += `/* Color ${colorNumber}\n`;
      cssCode += `--color-${colorNumber}-hex: ${palette};\n`;
      cssCode += `--color-${colorNumber}-rgb: rgb(${hexToRgb(palette)});\n\n`;
    }

    return cssCode;
  }

  function downloadTXTFile(
    cssCode: string,
    artistName: string,
    albumTitle: string,
  ) {
    const fileName = `${artistName
      .toLowerCase()
      .replace(/\s+/g, '-')}-${albumTitle
      .toLowerCase()
      .replace(/\s+/g, '-')}-palette.txt`;

    const blob = new Blob([cssCode], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }

  const handleDownload = () => {
    const currentAlbum = allAlbums[currentPaletteIndex];
    const artist = data.find(artist =>
      artist.albums.some(album => album.album_id === currentAlbum.album_id),
    );
    const cssCode = generateCSSCode(
      artist?.name as string,
      currentAlbum.album_title,
      currentAlbum.palettes,
    );

    if (artist) {
      downloadTXTFile(cssCode, artist.name, currentAlbum.album_title);
    }
  };

  return (
    <>
      <div className="flex items-center gap-9 justify-end text-grey text-xs font-bold">
        <button onClick={nextPalette} className="uppercase">
          next palette
        </button>
        <button onClick={previousPalette} className="uppercase">
          previous palette
        </button>
        <button onClick={handleDownload} className="uppercase">
          download
        </button>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-9 h-[calc(100vw-75.694vw)]">
        {allAlbums[currentPaletteIndex].palettes.map((palette, index) => (
          <div
            key={index}
            className="w-full h-full rounded relative cursor-pointer group"
            style={{backgroundColor: palette}}
          >
            <div className="absolute bottom-5 left-5 right-5 space-y-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center justify-between uppercase text-sm font-semibold text-white">
                <p className="">HEX</p>
                <p className="">{palette.replace('#', '').toUpperCase()}</p>
              </div>
              <div className="flex items-center justify-between uppercase text-sm font-semibold text-white">
                <p>RGB</p>
                <p>{hexToRgb(palette)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
