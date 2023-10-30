import type {Metadata} from 'next';
import {tomatoGrotesk} from '../../public/fonts';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import './globals.css';

const metadata: Metadata = {
  title: 'album color homepage',
  description: 'album color homepage',
  openGraph: {
    images:
      'https://res.cloudinary.com/dspbvhlt6/image/upload/v1698306386/album-colors/Meta_Image_nn6lkv.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${tomatoGrotesk.className} min-h-screen bg-white px-4 lg:px-[25px] pt-2 pb-6 flex flex-col`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export {metadata};
