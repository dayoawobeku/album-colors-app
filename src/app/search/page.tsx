import type {Metadata} from 'next';
import SearchClient from '@/components/search';
import {supabase} from '@/utils/supabase';

const metadata: Metadata = {
  title: 'Search Albums and Artistes | Find Color Inspiration in Music',
  description:
    'Search and discover a diverse range of albums and artists to inspire your creativity with captivating color palettes',
  openGraph: {
    title: 'Search Albums and Artistes | Find Color Inspiration in Music',
    description:
      'Search and discover a diverse range of albums and artists to inspire your creativity with captivating color palettes',
    images:
      'https://res.cloudinary.com/dedywga3v/image/upload/v1698911657/meta_image_guzgce.png',
    url: 'https://albumcolours.co/search',
  },
  twitter: {
    title: 'Search Albums and Artistes | Find Color Inspiration in Music',
    description:
      'Search and discover a diverse range of albums and artists to inspire your creativity with captivating color palettes',
    images: {
      url: 'https://res.cloudinary.com/dedywga3v/image/upload/v1698911657/meta_image_guzgce.png',
    },
  },
};

export const revalidate = 3600;

export default async function Search() {
  const {data, error} = await supabase.from('artistes').select('*');

  return (
    <main className="grow mt-16 sm:mt-24">
      <SearchClient data={data || []} />
    </main>
  );
}

export {metadata};
