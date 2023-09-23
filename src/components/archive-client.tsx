'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Album, Artist} from '@/types';

export default function ArchiveClient({data}: {data: Artist[]}) {
  const [hoveredAlbum, setHoveredAlbum] = useState<Album | null>(null);

  return (
    <>
      <table className="w-full basis-full lg:basis-[54.7%] border-separate border-spacing-y-6">
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
              <tr
                key={album.album_id}
                className="group"
                onMouseOver={() => setHoveredAlbum(album)}
                onMouseOut={() => setHoveredAlbum(null)}
              >
                <td>
                  <Link
                    className="flex items-center justify-center text-grey-800 font-medium text-sm text-center group-hover:text-grey group-hover:underline transition-colors duration-300"
                    href={`/album/${album.album_id}`}
                  >
                    {artist.name}
                  </Link>
                </td>
                <td>
                  <Link
                    className="flex items-center justify-center text-grey-800 font-medium text-sm text-center group-hover:text-grey group-hover:underline transition-colors duration-300"
                    href={`/album/${album.album_id}`}
                  >
                    {album.album_title}
                  </Link>
                </td>
                <td>
                  <Link
                    className="flex items-center justify-center text-grey-800 font-medium text-sm text-center group-hover:text-grey group-hover:underline transition-colors duration-300"
                    href={`/album/${album.album_id}`}
                  >
                    {album.release_date.split('-')[0]}
                  </Link>
                </td>
              </tr>
            )),
          )}
        </tbody>
      </table>
      <div
        className={`fixed hidden lg:block lg:right-[4.5%] w-[calc(100vw-72.22vw)] h-[calc(100vw-68.75vw)] rounded basis-[29.79%] transition-all duration-300 ease-in ${
          hoveredAlbum ? 'opacity-100' : 'opacity-0'
        } `}
      >
        {hoveredAlbum ? (
          <Image
            src={hoveredAlbum.cover_image}
            alt={hoveredAlbum.album_title}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
            className={`rounded object-cover ${
              hoveredAlbum ? 'opacity-100' : 'opacity-0'
            }}`}
            quality={100}
          />
        ) : null}
      </div>
    </>
  );
}
