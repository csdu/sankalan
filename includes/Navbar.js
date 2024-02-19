import React from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  Badge,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";
import { BellIcon, InboxIcon } from "@heroicons/react/24/solid";

import data from "@/data";

const inter = Inter({ subsets: ['latin'] })
 
export default function NavbarDefault() {
  const router = useRouter();
  const { site, contact } = data;

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const listItems = [
    {
      title: 'About',
      href: '/about'
    }, {
      title: 'Events',
      href: '/events'
    }, {
      title: 'Team',
      href: '/team'
    }, {
      title: 'Sponsors',
      href: '/sponsors'
    }, {
      title: 'FAQ',
      href: '/faq'
    }
  ];
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {listItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`cursor-pointer text-white hover:text-pink-300 ${router.pathname == item.href ? "active" : ""} transition-colors duration-300`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
 
  return (
    <Navbar 
      variant="filled"
      color="transparent"
      className={`mx-auto w-100 py-2 lg:py-4 ${inter.className} px-0`}
    >
      <div className="container mx-auto w-100 flex items-center justify-between text-white">
        <Link
          href="/"
          className="mr-4 cursor-pointer py-1.5 title glitch-nav text-[1.25em] hover:text-pink-300 transition-colors duration-300 ease-in-out"
        >
          {site.title}
        </Link>

        <div className="hidden nav-links lg:block">
          {navList}
        </div>
        
        <div className="nav-links flex items-center gap-x-2">
            <div className="hidden lg:inline-block mr-5 cursor-pointer">
              <Badge color="red">
                  <InboxIcon className="h-5 w-5 mt-1" />
              </Badge>
            </div>
            <a className="hidden lg:inline-block main-button"><span>register.now()</span></a>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="">
        <div>
          {navList}
          <Link
            href={'#'}
            className={`cursor-pointer mt-2 hover:text-pink-300 ${router.pathname == '' ? "active" : ""} transition-colors duration-300`}
          >
            Announcements
          </Link>
          <div className="w-100 mx-auto mt-6">
            <div className="nav-links gap-x-2">
              <a className="main-button"><span>register.now()</span></a>
            </div>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
