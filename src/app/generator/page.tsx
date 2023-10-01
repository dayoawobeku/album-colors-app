import type {Metadata} from 'next';
import {supabase} from '@/utils/supabase';
import {Album} from '@/types';
import Palettes from '@/components/palettes';

const metadata: Metadata = {
  title: 'album color generator page',
  description: 'album color generator page',
};

export const revalidate = 0;

export default async function Generator() {
  const {data, error} = await supabase
    .from('artistes')
    .select('*')
    .order('created_at', {ascending: false});

  const allAlbums = data?.reduce((acc: Album[], artist) => {
    return [...acc, ...artist.albums];
  }, []);

  return (
    <main className="grow mt-16 sm:mt-24">
      <Palettes allAlbums={allAlbums} data={data || []} />
    </main>
  );
}

export {metadata};
