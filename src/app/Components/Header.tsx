"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/react";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  const navItems = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "About Us",
      link: "/aboutus",
    },
    {
      id: 3,
      text: "Contact Us",
      link: "/contactus",
    },
  ];

  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };
  return (
    <>
      <div
        onClick={() => {
          closeNavbar();
        }}
        aria-hidden="true"
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          openNavbar ? "flex lg:hidden" : "hidden"
        }`}
      />
      <header className="absolute inset-x-0 top-0 h-20 flex items-center z-50">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-50">
          <nav className="flex items-center justify-between w-full relative">
            <div className="inline-flex relative bg-inherit">
              <Link href="/" className="flex items-center gap-2">
                <span className="flex">
                  <svg
                    width="40"
                    height="50"
                    viewBox="0 0 95 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_229_7)">
                      <path
                        d="M10 100C7.34784 100 4.8043 98.9464 2.92893 97.0711C1.05357 95.1957 0 92.6522 0 90L0 40C0 37.3478 1.05357 34.8043 2.92893 32.9289C4.8043 31.0536 7.34784 30 10 30C12.6522 30 15.1957 31.0536 17.0711 32.9289C18.9464 34.8043 20 37.3478 20 40V90C20 92.6522 18.9464 95.1957 17.0711 97.0711C15.1957 98.9464 12.6522 100 10 100Z"
                        fill="#F88FC2"
                      />
                      <path
                        d="M0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20H45C52.9565 20 60.5871 23.1607 66.2132 28.7868C71.8393 34.4129 75 42.0435 75 50C75 57.9565 71.8393 65.5871 66.2132 71.2132C60.5871 76.8393 52.9565 80 45 80H40C37.3478 80 34.8043 81.0536 32.9289 82.9289C31.0536 84.8043 30 87.3478 30 90C30 92.6522 31.0536 95.1957 32.9289 97.0711C34.8043 98.9464 37.3478 100 40 100H45C51.5661 100 58.0679 98.7067 64.1342 96.194C70.2004 93.6812 75.7124 89.9983 80.3553 85.3553C84.9983 80.7124 88.6812 75.2004 91.194 69.1342C93.7067 63.0679 95 56.5661 95 50C95 43.4339 93.7067 36.9321 91.194 30.8658C88.6812 24.7995 84.9983 19.2876 80.3553 14.6447C75.7124 10.0017 70.2004 6.31876 64.1342 3.80602C58.0679 1.29329 51.5661 0 45 0L10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10Z"
                        fill="#10B981"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_229_7">
                        <rect width="95" height="100" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="text-lg text-gray-700 dark:text-white">
                  DogBreed
                </span>
              </Link>
            </div>
            <div
              className={`
                    absolute top-10 px-5 sm:px-8 md:px-12 lg:z-auto
                    lg:px-0 lg:pt-0 lg:top-0 
                    bg-white dark:bg-gray-950 lg:dark:bg-transparent  rounded-xl border border-gray-200 
                    dark:border-gray-800 shadow-lg shadow-gray-100 dark:shadow-transparent  
                    lg:border-none lg:shadow-none lg:rounded-none lg:bg-transparent 
                    w-full lg:justify-between py-6 lg:py-0 lg:relative flex flex-col lg:flex-row transition-all duration-300 ease-linear origin-top
                    ${
                      openNavbar
                        ? ""
                        : "invisible opacity-20 translate-y-6 lg:visible lg:opacity-100 lg:translate-y-0"
                    }
                `}
            >
              <ul className="text-gray-700 dark:text-gray-100 w-full flex lg:items-center gap-y-4 lg:gap-x-8 flex-col lg:flex-row lg:w-full lg:justify-center">
                {navItems.map((navItem) => (
                  <li key={navItem.id}>
                    <Link
                      href={navItem.link}
                      className={`${
                        pathname == navItem.link ? "text-emerald-500" : ""
                      } transition hover:text-emerald-500 ease-linear text-lg`}
                    >
                      {navItem.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="lg:min-w-max flex flex-col lg:flex-row lg:items-center gap-4 mt-8 lg:mt-0 w-full sm:w-max">
                <Link
                  href="#"
                  className="px-7 relative text-emerald-500 h-12 flex w-full sm:w-max justify-center items-center before:bg-emerald-500/5 dark:before:bg-emerald-500/10 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95"
                >
                  <span className="relative text-emerald-500">Signin</span>
                </Link>
                <Link
                  href="#"
                  className="px-7 relative text-white h-12 flex w-full sm:w-max justify-center items-center before:bg-emerald-500 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95"
                >
                  <span className="relative text-white"> Join Us</span>
                </Link>
              </div>
            </div>
            <div className="flex ml-2 pl-2 border-l border-gray-100 dark:border-gray-800 min-w-max items-center gap-x-3">
              <button className="outline-none flex relative text-gray-700 dark:text-gray-300 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 dark:flex hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 dark:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
                <span className="sr-only">switch theme</span>
              </button>
              <button
                onClick={() => {
                  toggleNavbar();
                }}
                aria-label="toggle navbar"
                className="outline-none lg:hidden w-7 h-auto flex flex-col relative children:flex"
              >
                <span
                  aria-hidden="true"
                  className={`
                            w-6 origin-right h-0.5 rounded-full bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-linear
                            ${
                              openNavbar
                                ? "-rotate-[40deg] -translate-y-[0.375rem] scale-x-100"
                                : " scale-x-75"
                            }
                        `}
                />
                <span
                  aria-hidden="true"
                  className={`
                            w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-linear
                            ${openNavbar ? "opacity-0 scale-x-0" : ""}
                        `}
                />
                <span
                  aria-hidden="true"
                  className={`
                            w-6 origin-right mt-1 h-0.5 rounded-full bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-linear
                            ${
                              openNavbar
                                ? "rotate-[40deg] -translate-y-[0.150rem] scale-x-100"
                                : "scale-x-50"
                            }
                        `}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
