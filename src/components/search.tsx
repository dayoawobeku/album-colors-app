'use client';

import {useSearchParams} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {Album, Artist} from '@/types';

export default function SearchClient({data}: {data: Artist[]}) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const filteredData = data
    ?.map(artist => {
      const artistName = artist.name.toLowerCase();
      const isArtistMatch = artistName.includes(searchQuery.toLowerCase());

      if (isArtistMatch) {
        return artist;
      } else {
        const matchingAlbums = artist.albums.filter(album =>
          album.album_title.toLowerCase().includes(searchQuery.toLowerCase()),
        );

        if (matchingAlbums.length > 0) {
          return {
            ...artist,
            albums: matchingAlbums,
          };
        }
      }

      return null;
    })
    .filter(Boolean);

  return (
    <>
      {searchQuery.length > 0 ? (
        filteredData.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {filteredData
              .filter(
                (artist: Artist | null): artist is Artist => artist !== null,
              )
              .map((artist: Artist) =>
                artist.albums.map((album: Album) => (
                  <Link
                    href={`/album/${album.album_id}`}
                    className="relative w-[calc(100vw-68.8vw)] h-[calc(100vw-63.6vw)] bg-grey-500 rounded"
                    key={album.album_id}
                  >
                    <Image
                      src={album.cover_image}
                      alt={album.album_title}
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
                      className="rounded object-cover"
                      quality={100}
                      fill
                    />
                  </Link>
                )),
              )}
          </div>
        ) : (
          <p className="text-grey">No results found.</p>
        )
      ) : (
        <p className="text-grey">You haven&apos;t searched for anything yet.</p>
      )}
    </>
  );
}
