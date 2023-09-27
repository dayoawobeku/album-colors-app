'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import debounce from 'lodash/debounce';

const LINKS = [
  {
    label: 'Archive',
    href: '/archive',
  },
  {
    label: 'Generator',
    href: '/generator',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedHandleSearchChange = debounce(newSearchQuery => {
    if (newSearchQuery.length > 0) {
      router.push(`/search?q=${newSearchQuery}`);
    } else {
      router.push('/search');
    }
  }, 500);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    debouncedHandleSearchChange(newSearchQuery);
  };

  return (
    <header>
      <nav className="text-grey">
        <Link href="/" className="block font-bold leading-[1.1] logo">
          ALBUM COLORS
        </Link>
        <div className="mt-4 sm:mt-0 flex items-center justify-between">
          <ul className="uppercase font-bold text-sm flex items-center gap-4 sm:gap-9">
            {LINKS.map(({label, href}) => (
              <li key={label}>
                <Link
                  className={`sm:px-1 sm:pb-3 ${
                    isActive(href) ? 'text-grey' : 'text-grey-800'
                  }`}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <form className="flex items-center gap-1 search">
            <input
              type="search"
              className="h-4 placeholder:text-grey uppercase font-bold text-sm outline-none"
              placeholder="SEARCH"
              name="q"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </nav>
    </header>
  );
}
