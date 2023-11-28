"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Disclosure } from "@headlessui/react";
import { Menu as MenuIcon, X, ExternalLink } from "lucide-react";
import { FaDiscord, FaGithub } from "react-icons/fa";

const navigation = [
  {
    name: "Vehicles",
    href: "/vehicles",
  },
  {
    name: "Generator",
    href: "/generator",
  },
  {
    name: "Download",
    href: "https://github.com/Flohhhhh/ultimate-lighting-controller/releases/latest",
    external: true
  },
  {
    name: "Docs",
    href: "https://docs.dwnstr.com/ulc/overview",
    external: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  const pathname = usePathname()

  return (
    <Disclosure as='nav' className='bg-shark-800 border-b border-shark-600'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-8 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-shark-400 hover:bg-shark-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <X className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <a
                  className='flex flex-shrink-0 items-center'
                  href='https://dwnstr.com'
                  target='_blank'
                >
                  <img
                    className='h-8 w-auto'
                    src='https://i.imgur.com/YmvNkV6.png'
                    alt='Dawnstar'
                  />
                </a>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        className={`${pathname === item.href ? 'bg-shark-700' : 'bg-shark-800'} flex items center justify-center gap-2 text-shark-200 hover:bg-shark-700 hover:text-white transition rounded-md px-3 py-2 text-sm font-medium transition`}
                      >
                        {item.name}
                        {item.external ? <ExternalLink className="text-shark-500" size={18}/> : ""}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center'>
                <div className='flex items-center justify-center gap-4 h-full text-shark-200'>
                  <Link
                    target='_blank'
                    href='https://github.com/dwnstr/ulc-web'
                    className='p-2 rounded hover:bg-shark-700 transition'
                  >
                    <FaGithub size={22} />
                  </Link>
                  <Link
                    target='_blank'
                    href='https://discord.gg/zH3k624aSv'
                    className='p-2 rounded hover:bg-shark-700 transition'
                  >
                    <FaDiscord size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <Disclosure.Button
                    as='a'
                    target={item.external ? "_blank" : "_self"}
                    className={classNames(
                      pathname === item.href
                        ? "bg-shark-700 text-white"
                        : "text-shark-300 hover:bg-shark-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
