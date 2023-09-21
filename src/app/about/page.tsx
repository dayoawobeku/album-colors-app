export default async function About() {
  return (
    <main className="mt-40 flex flex-col items-center justify-center gap-10 max-w-xl mx-auto">
      <div className="text-sm">
        <p className="uppercase text-grey font-bold">ABOUT ALBUM COLOURS</p>
        <p className="mt-4 text-grey-800 font-medium">
          Album Colours is an open-source visual directory that draws colour
          palette inspiration from music album covers. We hope to help designers
          and other creatives get visual inspiration from their albums of
          choice. We are constantly updating new album covers and colour
          information. There are possibly millions of album covers after all.
        </p>
      </div>
      <div className="text-sm">
        <p className="uppercase text-grey font-bold">CONTACT US</p>
        <p className="mt-4 text-grey-800 font-medium">
          If you’d like to contribute to our efforts or get in touch for any
          other reason, shoot a mail to{' '}
          <a
            href="mailto:hi@albumcolours.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            hi@albumcolours.com
          </a>
        </p>
      </div>
    </main>
  );
}
