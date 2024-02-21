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
import { useRouter } from "next/router";
import { InboxIcon } from "@heroicons/react/24/solid";
import logo from "@/public/images/sankalan2024-navbar-logo.png";

import data from "@/data";
import Image from "next/image";

 
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
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
    {listItems.map((item, index) => (
        <li key={index} className="flex items-center">
          <Link
            href={item.href}
            className={`cursor-pointer text-white hover:text-sankalan-yellow ${router.pathname == item.href ? `active text-xl -rotate-2` : ""} transition-colors duration-300 font-[potatosans]`}
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
      className={`mx-auto w-100 py-2 lg:py-4 px-0`}
    >
      <div className="container mx-auto w-100 flex items-center justify-between text-white">
        <Link
          href="/"
          className="drop-shadow-lg mr-4 cursor-pointer py-1.5 text-[1.25em] transform transition-transform hover:scale-110 transition-colors duration-300 ease-in-out font-bold tracking-wide"
        >
        <Image 
          src={logo}
          alt="Sankalan 2024 Logo" 
          height={20}
          width={150}
          placeholder="blur"
          />
        </Link>

        <div className="hidden nav-links lg:block">
          {navList}
        </div>
        
        <div className="nav-links flex items-center gap-x-2">
            <Link href={'/announcements'} className="hidden lg:inline-block mr-4 cursor-pointer">
              <Badge color="red">
                  <InboxIcon className="h-5 w-5 mt-1" />
              </Badge>
            </Link>
            <Link onClick={() => alert('Event Registrations have not started yet. Please check back later.')} href={'#'} className="hidden lg:inline-block bg-gradient-to-r from-sankalan-dark-yellow to-sankalan-accent-red
            p-2 p-y-0 text-black hover:bg-sankalan-accent-yellow text-white uppercase mt-[-5]
            hover:scale-110 transition-transform transition-colors duration-300 ease-in-out border-4 border-white font-[spacemono] text-sm font-bold
            ">
              <span 
                style={
                  {
                    top: '-1px',
                    position: 'relative'
                  }
                }
              >register</span>
            </Link>
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
        <div className="mt-6">
          {navList}
          <Link
            href={'/announcements'}
            className={`cursor-pointer mt-2 hover:text-sankalan-yellow ${router.pathname == '/announcements' ? "active" : ""} transition-colors duration-300 font-[potatosans]`}
          >
            Updates
          </Link>
          <div className="w-100 mx-auto mt-6">
            <div className="nav-links gap-x-2">
              <Link onClick={() => alert('Event Registrations have not started yet. Please check back later.')} href={'#'} className="inline-block bg-gradient-to-r from-sankalan-dark-yellow to-sankalan-accent-red
            p-2 p-y-0 text-black hover:bg-sankalan-accent-yellow text-white uppercase mt-[-5]
            hover:scale-110 transition-transform transition-colors duration-300 ease-in-out border-2 border-white font-[spacemono] text-sm font-bold
            ">
              <span 
                style={
                  {
                    top: '-1px',
                    position: 'relative'
                  }
                }
              >register</span>
            </Link>
            </div>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
