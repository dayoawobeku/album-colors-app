'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Album, Artist} from '@/types';

type DataItem = Album | Artist;

const shuffleArray = (array: DataItem[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  return newArray;
};

function AlbumCard({album}: {album: Album}) {
  return (
    <>
      {album && (
        <>
          <Link
            href={`/album/${album.album_id}`}
            className="hidden lg:grid relative bg-[#D9D9D9] w-[calc(100vw-72.22vw)] h-[calc(100vw-68.7vw)] rounded"
          >
            <Image
              src={album.cover_image}
              alt={album.album_title}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
              className="rounded object-cover"
              quality={100}
              priority
            />
          </Link>

          <Link
            href={`/album/${album.album_id}`}
            className="lg:hidden bg-[#D9D9D9] w-full rounded"
          >
            <Image
              src={album.cover_image}
              alt={album.album_title}
              width={768}
              height={768}
              className="rounded object-cover"
              fetchPriority="high"
              priority
            />
          </Link>
        </>
      )}
    </>
  );
}

export default function AlbumCardGrid({data}: {data: Album[]}) {
  const [randomAlbums, setRandomAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!data || data.length === 0) return;
    const randomArtists = shuffleArray(data).slice(0, 4);
    const randomAlbums = randomArtists
      .map((artist: DataItem) => {
        if ('albums' in artist) {
          const randomAlbum = shuffleArray(artist.albums).slice(0, 1);
          return randomAlbum[0];
        }
        return null;
      })
      .filter(album => album !== null) as Album[];

    setRandomAlbums(randomAlbums);
    setIsLoading(false);
  }, [data]);

  return (
    <>
      {isLoading
        ? Array.from({length: 4}).map((_, index) => (
            <div
              key={index}
              className="relative bg-[#D9D9D9] lg:w-[calc(100vw-72.22vw)] lg:h-[calc(100vw-68.7vw)] rounded"
            />
          ))
        : randomAlbums.map(album => (
            <AlbumCard key={album.album_id} album={album} />
          ))}
    </>
  );
}
