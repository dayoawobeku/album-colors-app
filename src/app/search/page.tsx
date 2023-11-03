import type {Metadata} from 'next';
import SearchClient from '@/components/search';
import {supabase} from '@/utils/supabase';

const metadata: Metadata = {
  title: 'Search Albums and Artistes | Find Color Inspiration in Music',
  description:
    'Search and discover a diverse range of albums and artists to inspire your creativity with captivating color palettes',
};

export const revalidate = 0;

export default async function Search() {
  const {data, error} = await supabase.from('artistes').select('*');

  return (
    <main className="grow mt-16 sm:mt-24">
      <SearchClient data={data || []} />
    </main>
  );
}

export {metadata};
