import {tomatoGrotesk} from '@/assets/fonts';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import './globals.css';

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
