"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const toggleMenu = () => {
    debugger;
    setMenuOpen((prev) => !prev);
  };

  const menuToggler = () => {
    debugger;
    setMenu((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={menu}
                onClick={menuToggler}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href="/">
                    <div
                      className={`${
                        pathname === "/"
                          ? "bg-gray-900 text-white rounded-md"
                          : ""
                      } text-gray-300 px-3 py-2 text-sm font-medium`}
                    >
                      Home
                    </div>
                  </Link>
                  <Link href="/dashboard">
                    <div
                      className={`${
                        pathname === "/dashboard"
                          ? "bg-gray-900 text-white rounded-md"
                          : ""
                      } text-gray-300 px-3 py-2 text-sm font-medium`}
                    >
                      Dashboard
                    </div>
                  </Link>
                  <Link href="/profile">
                    <div
                      className={`${
                        pathname === "/profile"
                          ? "bg-gray-900 text-white rounded-md"
                          : ""
                      } text-gray-300 px-3 py-2 text-sm font-medium`}
                    >
                      Profile
                    </div>
                  </Link>
                  {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a> */}
                </div>
              </div>
            </div>
            {session ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <pre className=" text-gray-400">Hi {session.user?.name}</pre>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={menuOpen}
                      aria-haspopup="true"
                      onClick={toggleMenu}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src={session.user?.image as string}
                        alt=""
                      /> */}
                       <Image src={session.user?.image as string} 
                        className="h-8 w-8 rounded-full"
                        alt="img" 
                        width={100}
                        height={100}
                        />
                    </button>
                    
                  </div>
                  {menuOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a> */}
                      <Link href="/profile">
                        <div className="block px-4 py-2 text-sm text-gray-700">
                          Profile
                        </div>
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                      >
                        Sign out
                      </button>
                      {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a> */}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
        {menu && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="/dashboard"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="/profile"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Profile
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
