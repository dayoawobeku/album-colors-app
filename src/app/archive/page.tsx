import type {Metadata} from 'next';
import {supabase} from '@/utils/supabase';
import ArchiveClient from '@/components/archive-client';
import Wrapper from '@/components/wrapper';

const metadata: Metadata = {
  title: 'Album Colors Archive | Explore a Visual Journey Through Music',
  description:
    'Dive into our extensive album archive showcasing captivating cover art from a world of music',
  openGraph: {
    title: 'Album Colors Archive | Explore a Visual Journey Through Music',
    description:
      'Dive into our extensive album archive showcasing captivating cover art from a world of music',
    images:
      'https://res.cloudinary.com/dedywga3v/image/upload/v1698911657/meta_image_guzgce.png',
    url: 'https://albumcolours.co/archive',
  },
  twitter: {
    title: 'Album Colors Archive | Explore a Visual Journey Through Music',
    description:
      'Dive into our extensive album archive showcasing captivating cover art from a world of music',
    images: {
      url: 'https://res.cloudinary.com/dedywga3v/image/upload/v1698911657/meta_image_guzgce.png',
    },
  },
};

export const revalidate = 0;

export default async function Archive() {
  const {data, error} = await supabase
    .from('artistes')
    .select('*')
    .order('created_at', {ascending: false});

  return (
    <Wrapper>
      <main className="grow relative mt-16 sm:mt-24 basis-full flex items-start justify-between lg:pr-[3.4%]">
        <ArchiveClient data={data || []} />
      </main>
    </Wrapper>
  );
}

export {metadata};
