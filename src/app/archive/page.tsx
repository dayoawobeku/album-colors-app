import type {Metadata} from 'next';
import {supabase} from '@/utils/supabase';
import ArchiveClient from '@/components/archive-client';

const metadata: Metadata = {
  title: 'album color archive page',
  description: 'album color archive page',
};

export const revalidate = 0;

export default async function Archive() {
  const {data, error} = await supabase
    .from('artistes')
    .select('*')
    .order('created_at', {ascending: false});

  return (
    <main className="grow relative mt-16 sm:mt-24 basis-full flex items-start justify-between lg:pr-[3.4%]">
      <ArchiveClient data={data || []} />
    </main>
  );
}

export {metadata};
