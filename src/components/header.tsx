'use client';

import { Button, Dialog, DialogPanel, Portal } from '@headlessui/react';
import { AlignJustify, PawPrintIcon, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { buttonVariants } from './button';

const headerLinks = [
  {
    label: 'Anasayfa',
    href: '/',
  },
  {
    label: 'Hakkımızda',
    href: '/hakkimizda',
  },
  {
    label: 'Evlat Edinme',
    href: '/evlat-edinme',
  },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

const Header = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [open, setOpen] = React.useState(false);

  return (
    <header className="relative w-full h-auto z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto w-full h-[100px] px-5 flex justify-between items-center">
        <Link href="/">
          <img
            src="https://duruthemes.com/demo/html/pepito/img/logo.png"
            alt="Pepito"
            className="w-[140px] h-auto object-cover"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-10">
          {headerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group">
              <span
                className={`text-lg font-light transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-secondary'
                    : 'group-hover:text-secondary'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <Link
          href="/iletisim?source=header"
          className={`${buttonVariants({
            variant: 'primary',
          })} !hidden lg:!inline-flex`}
        >
          <PawPrintIcon className="size-4 -mt-0.5" />
          <span>Hemen Arayın</span>
        </Link>

        <Button
          type="button"
          onClick={() => setOpen(!open)}
          className="size-11 flex lg:hidden justify-center items-center cursor-pointer"
        >
          {open ? (
            <X className="size-6" />
          ) : (
            <AlignJustify className="size-6" />
          )}
        </Button>

        <Portal>
          <Dialog
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            className="absolute top-[100px] left-0 z-50 w-full h-auto bg-white pb-5"
          >
            <DialogPanel className="max-w-7xl w-full mx-auto px-5">
              <ul className="flex flex-col gap-5">
                {headerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group">
                      <span
                        className={`text-lg font-light transition-colors duration-300 ${
                          isActive(link.href)
                            ? 'text-secondary'
                            : 'group-hover:text-secondary'
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/iletisim?source=header"
                    className={`${buttonVariants({
                      variant: 'primary',
                    })} w-full`}
                  >
                    <PawPrintIcon className="size-4 -mt-0.5" />
                    <span>Hemen Arayın</span>
                  </Link>
                </li>
              </ul>
            </DialogPanel>
          </Dialog>
        </Portal>
      </div>
    </header>
  );
};

export default Header;

Header.displayName = 'Header';
