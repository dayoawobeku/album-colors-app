import {supabase} from '@/utils/supabase';
import ArchiveClient from '@/components/archive-client';

export default async function Archive() {
  const {data, error} = await supabase.from('artistes').select('*');

  return (
    <main className="grow relative mt-16 sm:mt-24 basis-full flex items-start justify-between lg:pr-[3.4%]">
      <ArchiveClient data={data || []} />;
    </main>
  );
}
