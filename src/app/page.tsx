import Image from 'next/image';
import Link from 'next/link';
import {arrowRight} from '@/assets/images';
import Draggable from '@/components/draggable';
import Grid from '@/components/grid';
import AlbumCardGrid from '@/components/album-card';
import {supabase} from '@/utils/supabase';
import {Album} from '@/types';

export const revalidate = 0;

export default async function Home() {
  const {data, error} = await supabase.from('artistes').select('*');

  return (
    <main className="grow">
      <Draggable rootClass={'drag'}>
        <Grid>
          <AlbumCardGrid data={data as Album[]} />
          <div className="hidden lg:flex items-center justify-center gap-1 whitespace-nowrap group m-auto">
            <Link
              href="/archive"
              className="text-grey text-sm font-bold uppercase"
            >
              See all albums
            </Link>
            <Image
              src={arrowRight}
              alt="arrow right"
              width={46}
              height={18}
              className="transition-all duration-300 group-hover:translate-x-1"
            />
          </div>
        </Grid>
      </Draggable>
      <div className="lg:hidden flex items-center justify-center gap-1 whitespace-nowrap group m-auto">
        <Link href="/archive" className="text-grey text-sm font-bold uppercase">
          See all albums
        </Link>
        <Image
          src={arrowRight}
          alt="arrow right"
          width={46}
          height={18}
          className="transition-all duration-300 group-hover:translate-x-1"
        />
      </div>
    </main>
  );
}
