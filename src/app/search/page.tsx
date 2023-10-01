import type {Metadata} from 'next';
import SearchClient from '@/components/search';
import {supabase} from '@/utils/supabase';

const metadata: Metadata = {
  title: 'album color search page',
  description: 'album color search page',
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
