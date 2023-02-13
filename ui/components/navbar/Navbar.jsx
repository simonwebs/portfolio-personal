// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
import { Meteor } from 'meteor/meteor';
import React, { Fragment, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BriefcaseIcon, ShieldExclamationIcon, ArrowPathRoundedSquareIcon, InboxArrowDownIcon } from '@heroicons/react/24/outline';
import { RoutePaths } from '../../common/general/RoutePaths';
import { ArrowRightOnRectangleIcon, HomeIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';

function classNames (...classes) {
  return classes.filter(Boolean).join(' ');
}
export const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <Disclosure as="nav" className="fixed z-50 w-full bg-gray-100/90 dark:bg-slate-800/90 shadow-sm" data-aos="zoom-in-down" data-aos-duration="3000">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary/50 dark:focus:ring-gray-50">
                    <span className="sr-only">Open main menu</span>
                    {open
                      ? (
                      <XMarkIcon className="block h-6 w-6 text-slate-800 dark:text-gray-50" aria-hidden="true" />
                        )
                      : (
                      <Bars3Icon className="block h-6 w-6 text-slate-800 dark:text-gray-50" aria-hidden="true" />
                        )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link to='/'>
                  <img
                    className="block h-8 w-8 rounded-full lg:hidden"
                    src="https://res.cloudinary.com/swed-dev/image/upload/v1675052302/lajlbinosanmti4ndn17.jpg"
                    alt="simon-agbey-web-development"
                  />
                  </Link>
                  <Link to='/'>
                  <img
                    className="hidden h-8 w-8 lg:block rounded-full"
                   src="https://res.cloudinary.com/swed-dev/image/upload/v1675052302/lajlbinosanmti4ndn17.jpg"
                    alt="simon-agbey-web-development"
                  />
                  </Link>
                </div>
                <div className="hidden lg:ml-10 md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-800", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    to="/"
                    className="flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-gray-50 hover:border-gray-50 hover:text-gray-700 dark:hover:text-gray-50/60 text-md hover:shadow-md hover:shadow-primary/50 rounded-lg"
                  >
                    <span className="sr-only">View notifications</span>
                  <HomeIcon className="h-5 w-5" aria-hidden="true" />
                    Home
                  </Link>
                   <Link
                    to="projects"
                    className="flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-gray-50 hover:border-gray-50 hover:text-gray-700 dark:hover:text-gray-50/60 text-md hover:shadow-md hover:shadow-primary/50 rounded-lg"
                  >
                    <span className="sr-only">View notifications</span>
                  <BriefcaseIcon className="h-5 w-5 dark:stroke-sky-500 rounded-full" aria-hidden="true" />
                    <span className="ml-1 text-md font-normal text-primary dark:text-gray-50">Projects</span>
                  </Link>
                  <Link
                    to="skills"
                    className="flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-gray-50 hover:border-gray-50 hover:text-gray-700 dark:hover:text-gray-50/60 text-md hover:shadow-md hover:shadow-primary/50 rounded-lg"
                  >
                     <span className="sr-only">View notifications</span>
                  <ShieldExclamationIcon className="h-5 w-5 stroke-red-500" aria-hidden="true" />
                 <span className="ml-1 text-md font-normal text-primary dark:text-gray-50">Skills</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                   <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="relative inline-flex items-center rounded-md border-b border-transparent bg-primary dark:bg-slate-800 px-2 py-1 text-sm font-medium text-white shadow-sm hover:border-gray-50 hover:bg-primary/70 focus:outline-none"
                  >
                  {theme === 'dark' ? '🌞' : '🌙'}
                  <span className="sr-only">dark mode switch</span>
                </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Profile dropdown */}

    <div>
     </div>
                        <button
                          onClick={() => navigate(RoutePaths.CONTACTFORM)}
                          type="button"
                          className="relative inline-flex items-center text-white rounded-md px-3 py-1 font-semibold overflow-hidden bg-primary dark:bg-slate-800 ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-gray-50 opacity-90 shadow-lg focus:ring-offset-1 hover:ring-slate-500 dark:text-gray-50 cursor-pointer"
                        >
                          <InboxArrowDownIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                          <span className="text-lg font-serif font-semibold text-white dark:text-gray-50">
                          Contact me
                          </span>
                        </button>
                </div>
              </div>
            </div>
          </div>
{/* mobile */}
          <Disclosure.Panel className="md:hidden shadow-lg dark:bg-slate-800 border-0 rounded-b-md">
            <div className="space-y-1 pt-2 pb-3 ml-3">
               <Disclosure.Button
                as={Link}
                to="/"
                className="flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-gray-50 hover:border-gray-50 hover:text-gray-700 dark:hover:text-gray-50/60 text-md"
              >
               <span className="sr-only">View notifications</span>
                  <HomeIcon className="h-5 w-5 stroke-primary" aria-hidden="true" />
                 <span className="ml-1 text-md font-normal text-primary dark:text-gray-50">Home</span>
              </Disclosure.Button>
               <Disclosure.Button
                as={Link}
                to="about"
                className="flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-gray-50 hover:border-gray-50 hover:text-gray-700 dark:hover:text-gray-50/60 text-md"
              >
               <span className="sr-only">View notifications</span>
                  <ArrowPathRoundedSquareIcon  className="h-5 w-5 stroke-primary" aria-hidden="true" />
                 <span className="ml-1 text-md font-normal text-primary dark:text-gray-50">About</span>
              </Disclosure.Button>
               <Disclosure.Button
                as={Link}
                to="projects"
                 className="flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-gray-50 hover:border-gray-50 hover:text-gray-700 dark:hover:text-gray-50/60 text-md"
              >
               <span className="sr-only">View notifications</span>
                  <BriefcaseIcon className="h-5 w-5 stroke-sky-500" aria-hidden="true" />
                 <span className="ml-1 text-md font-normal text-primary dark:text-gray-50">Projects</span>
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="skills"
                className="flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-gray-50 hover:border-gray-50 hover:text-gray-700 dark:hover:text-gray-50/60 text-md"
              >
               <span className="sr-only">View notifications</span>
                  <ShieldExclamationIcon className="h-5 w-5 stroke-red-500" aria-hidden="true" />
                 <span className="ml-1 text-md font-normal text-primary dark:text-gray-50">Skills</span>
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src='https://res.cloudinary.com/swed-dev/image/upload/v1675052302/lajlbinosanmti4ndn17.jpg'
                    alt=""
                  />
                </div>
                <div className="ml-3">
                 <Disclosure.Button>
                        <a
                          onClick={() => navigate(RoutePaths.CONTACTFORM)}
                          type="button"
                           className="relative inline-flex items-center text-white rounded-md px-3 py-1 font-semibold overflow-hidden bg-primary dark:bg-slate-800 ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-gray-50 opacity-90 shadow-lg focus:ring-offset-1 hover:ring-slate-500 dark:text-gray-50 cursor-pointer"
                        >
                          <ArrowRightOnRectangleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                          <span className="text-lg font-serif font-semibold text-white dark:text-gray-50">
                           Contact me
                          </span>
                        </a>
                         </Disclosure.Button>
              </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
