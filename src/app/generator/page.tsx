import {supabase} from '@/utils/supabase';
import {Album} from '@/types';
import Palettes from '@/components/palettes';

export default async function Generator() {
  const {data, error} = await supabase.from('artistes').select('*');

  const allAlbums = data?.reduce((acc: Album[], artist) => {
    return [...acc, ...artist.albums];
  }, []);

  return (
    <main className="mt-24">
      <Palettes allAlbums={allAlbums} data={data || []} />
    </main>
  );
}
