import SearchClient from '@/components/search';
import {supabase} from '@/utils/supabase';

export const revalidate = 0;

export default async function Search() {
  const {data, error} = await supabase.from('artistes').select('*');

  return (
    <main className="grow mt-16 sm:mt-24">
      <SearchClient data={data || []} />
    </main>
  );
}
