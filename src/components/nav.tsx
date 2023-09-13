import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <nav className="text-grey">
        <Link href="/" className="block font-bold leading-none logo">
          ALBUM COLORS
        </Link>
        <div className="flex items-center justify-between">
          <ul className="uppercase font-bold text-sm flex items-center gap-9">
            <li>
              <Link href="/archive" className="">
                Archive
              </Link>
            </li>
            <li>
              <Link href="/generator" className="">
                Generator
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                About
              </Link>
            </li>
          </ul>
          <form className="flex items-center gap-1 search">
            <input
              type="search"
              className="h-4 placeholder:text-grey uppercase font-bold text-sm outline-none"
              placeholder="SEARCH"
            />
          </form>
        </div>
      </nav>
    </header>
  );
}
