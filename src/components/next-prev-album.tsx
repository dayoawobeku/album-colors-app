'use client';

import {useRouter} from 'next/navigation';
import {Album, Artist} from '@/types';
import Link from 'next/link';

export default function NextPrevAlbum({
  data,
  params,
}: {
  data: Artist[];
  params: {id: string};
}) {
  const router = useRouter();
  const artiste = data?.find(
    artist =>
      artist?.albums?.some((album: Album) => album?.album_id === params.id),
  );

  const currentAlbumIndex = artiste?.albums.findIndex(
    (album: Album) => album?.album_id === params.id,
  );

  const goToNextAlbum = () => {
    const artistAlbums = artiste?.albums || [];
    if (
      currentAlbumIndex !== undefined &&
      currentAlbumIndex < artistAlbums.length - 1
    ) {
      const nextAlbumId = artistAlbums[currentAlbumIndex + 1]?.album_id;
      return nextAlbumId;
    } else {
      // Check if this is the last artist and the last album
      const currentArtistIndex = data.findIndex(
        artist => artist.id === artiste?.id,
      );
      if (
        currentArtistIndex !== undefined &&
        currentArtistIndex === data.length - 1
      ) {
        const nextAlbumId = data[0].albums[0]?.album_id;
        return nextAlbumId;
      } else if (
        currentArtistIndex !== undefined &&
        currentArtistIndex < data.length - 1
      ) {
        const nextAlbumId = data[currentArtistIndex + 1].albums[0]?.album_id;
        return nextAlbumId;
      }
    }
  };

  const goToPreviousAlbum = () => {
    if (currentAlbumIndex !== undefined && currentAlbumIndex > 0) {
      const previousAlbumId = artiste?.albums[currentAlbumIndex - 1]?.album_id;
      return previousAlbumId;
    } else {
      // Check if this is the first artist, if so, go to the last artist
      const currentArtistIndex = data.findIndex(
        artist => artist.id === artiste?.id,
      );
      if (currentArtistIndex !== undefined && currentArtistIndex === 0) {
        const previousArtistAlbums = data[data.length - 1].albums;
        const previousAlbumId =
          previousArtistAlbums[previousArtistAlbums.length - 1]?.album_id;
        return previousAlbumId;
      } else if (currentArtistIndex !== undefined && currentArtistIndex > 0) {
        const previousArtistAlbums = data[currentArtistIndex - 1].albums;
        const previousAlbumId =
          previousArtistAlbums[previousArtistAlbums.length - 1]?.album_id;
        return previousAlbumId;
      }
    }
  };

  const nextAlbumId = goToNextAlbum();
  const previousAlbumId = goToPreviousAlbum();

  return (
    <div className="flex items-center justify-between">
      <Link
        href={`/album/${previousAlbumId}`}
        className="uppercase font-bold text-xs text-grey"
      >
        previous
      </Link>
      <Link
        href={`/album/${nextAlbumId}`}
        className="uppercase font-bold text-xs text-grey"
      >
        next
      </Link>
    </div>
  );
}
