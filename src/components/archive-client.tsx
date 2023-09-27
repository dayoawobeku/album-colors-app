'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Album, Artist} from '@/types';

export const revalidate = 0;

export default function ArchiveClient({data}: {data: Artist[]}) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="flex basis-full">
      <table className="w-full basis-full sm:basis-[54.7%] border-separate border-spacing-y-6">
        <thead>
          <tr>
            <th className="uppercase font-bold text-sm text-grey">Artist</th>
            <th className="uppercase font-bold text-sm text-grey">
              Album Title
            </th>
            <th className="uppercase font-bold text-sm text-grey">Year</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((artist: Artist) =>
            artist.albums.map((album: Album) => (
              <tr key={album.album_id} className="group">
                <td>
                  <Link
                    className="flex items-center justify-center text-grey-800 font-medium text-sm text-center group-hover:text-grey group-hover:font-bold transition-all ease-in-out duration-[350ms]"
                    href={`/album/${album.album_id}`}
                  >
                    {artist.name}
                  </Link>
                </td>
                <td>
                  <Link
                    className="flex items-center justify-center text-grey-800 font-medium text-sm text-center group-hover:text-grey group-hover:font-bold transition-all ease-in-out duration-[350ms]"
                    href={`/album/${album.album_id}`}
                  >
                    {album.album_title}
                  </Link>
                </td>
                <td>
                  <Link
                    className="flex items-center justify-center text-grey-800 font-medium text-sm text-center group-hover:text-grey group-hover:font-bold transition-all ease-in-out duration-[350ms]"
                    href={`/album/${album.album_id}`}
                  >
                    {album.release_date.split('-')[0]}
                  </Link>
                </td>
                <td className="hidden sm:block pointer-events-none">
                  <div
                    className={`fixed ${
                      scrollPosition > 0 ? 'bottom-[13.9%]' : 'bottom-0'
                    } right-[4.5%] w-[calc(100vw-72.22vw)] h-[calc(100vw-68.75vw)] opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-[350ms]`}
                  >
                    <Image
                      src={album.cover_image}
                      alt={album.album_title}
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
                      fill
                      quality={100}
                      className="rounded object-cover"
                    />
                  </div>
                </td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}
