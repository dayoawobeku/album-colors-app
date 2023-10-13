'use client';

import Link from 'next/link';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
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
  const searchParams = useSearchParams();
  const isActive = (href: string) => pathname === href;

  const debouncedHandleSearchChange = debounce(newSearchQuery => {
    const url = new URLSearchParams(Array.from(searchParams.entries()));

    if (newSearchQuery.length > 0) {
      url.set('q', newSearchQuery);
    }

    const query = url.toString().length > 0 ? `?${url.toString()}` : '';

    if (newSearchQuery.length > 0) {
      router.push(`/search${query}`);
    } else {
      if (pathname !== '/search') {
        router.push('/');
      } else {
        router.push('/search');
      }
    }
  }, 1000);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value;
    debouncedHandleSearchChange(newSearchQuery);
  };

  return (
    <header>
      <nav className="text-grey">
        <Link href="/" className="block font-bold leading-[1.1] logo">
          ALBUM COLORS
        </Link>
        <div className="mt-4 sm:mt-0 flex items-center justify-between gap-4 flex-wrap">
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
          <search>
            <form className="flex items-center gap-1 search">
              <input
                type="search"
                className="h-4 placeholder:text-grey uppercase font-bold text-sm outline-none"
                placeholder="SEARCH AN ALBUM OR ARTISTE"
                name="search"
                aria-label="Search"
                defaultValue={searchParams?.get('q') || ''}
                onChange={handleSearchChange}
                key={searchParams?.get('q')}
                autoComplete="off"
              />
            </form>
          </search>
        </div>
      </nav>
    </header>
  );
}
