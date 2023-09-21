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
      artist?.albums?.some((album: Album) => album.album_id === params.id),
  );

  const currentAlbumIndex = artiste?.albums.findIndex(
    (album: Album) => album.album_id === params.id,
  );

  const goToNextAlbum = () => {
    const artistAlbums = artiste?.albums || [];
    if (
      currentAlbumIndex !== undefined &&
      currentAlbumIndex < artistAlbums.length - 1
    ) {
      const nextAlbumId = artistAlbums[currentAlbumIndex + 1].album_id;
      router.push(`/album/${nextAlbumId}`);
    } else {
      // Check if this is the last artist and the last album
      const currentArtistIndex = data.findIndex(
        artist => artist.id === artiste?.id,
      );
      if (
        currentArtistIndex !== undefined &&
        currentArtistIndex === data.length - 1
      ) {
        const nextArtistId = data[0].id;
        const nextAlbumId = data[0].albums[0]?.album_id;
        router.push(`/album/${nextAlbumId || ''}?artist=${nextArtistId}`);
      } else if (
        currentArtistIndex !== undefined &&
        currentArtistIndex < data.length - 1
      ) {
        const nextArtistId = data[currentArtistIndex + 1].id;
        const nextAlbumId = data[currentArtistIndex + 1].albums[0]?.album_id;
        router.push(`/album/${nextAlbumId || ''}?artist=${nextArtistId}`);
      }
    }
  };

  const goToPreviousAlbum = () => {
    if (currentAlbumIndex !== undefined && currentAlbumIndex > 0) {
      const previousAlbumId = artiste?.albums[currentAlbumIndex - 1].album_id;
      router.push(`/album/${previousAlbumId}`);
    } else {
      // Check if this is the first artist, if so, go to the last artist
      const currentArtistIndex = data.findIndex(
        artist => artist.id === artiste?.id,
      );
      if (currentArtistIndex !== undefined && currentArtistIndex === 0) {
        const previousArtistId = data[data.length - 1].id;
        const previousArtistAlbums = data[data.length - 1].albums;
        const previousAlbumId =
          previousArtistAlbums[previousArtistAlbums.length - 1]?.album_id;
        router.push(
          `/album/${previousAlbumId || ''}?artist=${previousArtistId}`,
        );
      } else if (currentArtistIndex !== undefined && currentArtistIndex > 0) {
        const previousArtistId = data[currentArtistIndex - 1].id;
        const previousArtistAlbums = data[currentArtistIndex - 1].albums;
        const previousAlbumId =
          previousArtistAlbums[previousArtistAlbums.length - 1]?.album_id;
        router.push(
          `/album/${previousAlbumId || ''}?artist=${previousArtistId}`,
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={goToPreviousAlbum}
        className="uppercase font-bold text-xs text-grey"
      >
        previous
      </button>
      <button
        onClick={goToNextAlbum}
        className="uppercase font-bold text-xs text-grey"
      >
        next
      </button>
    </div>
  );
}
