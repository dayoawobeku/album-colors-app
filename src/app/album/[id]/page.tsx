import Image from 'next/image';
import NextPrevAlbum from '@/components/next-prev-album';
import {Album} from '@/types';
import {supabase} from '@/utils/supabase';

export default async function AlbumPage({params}: {params: {id: string}}) {
  const {data, error} = await supabase.from('artistes').select('*');

  const artiste = data?.find(
    artist =>
      artist?.albums?.some((album: Album) => album.album_id === params.id),
  );

  const album: Album = artiste.albums.find(
    (album: Album) => album.album_id === params.id,
  );

  return (
    <main className="grow mt-16 sm:mt-24 flex flex-col md:flex-row items-stretch md:items-center justify-between basis-full xl:px-6 gap-4 xl:gap-[5.42%]">
      <div className="basis-full md:basis-1/3">
        <NextPrevAlbum data={data || []} params={params} />

        <div className="mt-6 space-y-4 lg:space-y-10">
          <div className="border border-1 border-grey-500 px-2 lg:px-12 py-4 relative flex items-center justify-between">
            <div className="h-[0.5px] w-full bg-grey-500 absolute -mx-2 lg:-mx-12" />
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">
                artist
              </p>
              <p className="text-grey-700 font-semibold text-sm pt-4">
                {artiste.name}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">
                album title
              </p>
              <p className="text-grey-700 font-semibold text-sm pt-4">
                {album.album_title}
              </p>
            </div>
          </div>
          <div className="border border-1 border-grey-500 px-2 lg:px-12 py-4 relative flex items-center justify-between">
            <div className="h-[0.5px] w-full bg-grey-500 absolute -mx-2 lg:-mx-12" />
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">year</p>
              <p className="text-grey-700 font-semibold text-sm pt-4">
                {new Date(album.release_date).getFullYear()}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">
                designer
              </p>
              <p className="text-grey-700 font-semibold text-sm pt-4">
                {new Date(album.release_date).getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden basis-full">
        <Image
          src={album.cover_image}
          alt={album.album_title}
          className="object-cover"
          quality={100}
          width={500}
          height={500}
        />
      </div>

      <div className="hidden md:block relative w-[calc(100vw-72.22vw)] h-[calc(100vw-72.22vw)] basis-1/3">
        <Image
          src={album.cover_image}
          alt={album.album_title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="basis-full md:basis-1/3">
        <div className="border border-1 border-grey-500 px-2 lg:px-10 pt-4 relative flex items-start justify-between">
          <div className="flex flex-col items-center justify-between">
            <p className="uppercase font-bold text-sm text-grey pb-4">color</p>
            {album.palettes.map((palette, index) => (
              <div key={index} className="py-4">
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
              <p key={index} className="text-grey-700 font-medium text-sm py-4">
                {palette.replace('#', '').toUpperCase()}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="uppercase font-bold text-sm text-grey pb-4">rgb</p>
            {album.palettes.map((palette, index) => (
              <p key={index} className="text-grey-700 font-medium text-sm py-4">
                {palette
                  .replace('#', '')
                  .match(/.{1,2}/g)
                  ?.map(hex => parseInt(hex, 16))
                  .join(', ')}
              </p>
            ))}
          </div>
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[16.6%] -mx-2 lg:-mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[33.1%] -mx-2 lg:-mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[49.7%] -mx-2 lg:-mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[66.2%] -mx-2 lg:-mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[82.8%] -mx-2 lg:-mx-10" />
        </div>
      </div>
    </main>
  );
}
