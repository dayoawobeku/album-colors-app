import {supabase} from '@/utils/supabase';
import ArchiveClient from '@/components/archive-client';

export default async function Archive() {
  const {data, error} = await supabase.from('artistes').select('*');

  return <ArchiveClient data={data || []} />;
}
