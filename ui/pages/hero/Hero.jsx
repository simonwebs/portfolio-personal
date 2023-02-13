import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Carousel } from './Carousel';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../common/general/RoutePaths';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id='home' className="mt-16 dark:!bg-none pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-20">
                <div
                  className=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <Link
                    to="contactForm"
                    className="inline-flex items-center rounded-full bg-primary dark:bg-primary p-1 pr-2 ring-1 ring-white/10 ring-slate-400 hover:ring-slate-200 dark:ring-slate-600 hover:ring-white/20 dark:hover:ring-slate-400 text-white hover:text-gray-200 dark:hover-bg-slate-600 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full sm:flex bg-sky-500/50 dark:bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white dark:text-gray-100">
                      Hire Me
                    </span>
                    <ChevronRightIcon
                      className=" h-5 w-5 dark:text-cyan-100"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block text-slate-700 dark:text-gray-100">
                    Hello!   
                  </span>
                  <span className="block text-primary/95">I'm Simon Agbey</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 dark:text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A FullStack developer. I specialized in building Web Apps, designing and
                  researching.
                </p>
                <div className="mt-8 sm:mt-10">
                  <div className=" border-t border-tertiaryOne/20 pt-8 md:flex md:items-center md:justify-between">
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-center lg:justify-start">
                      <div
                        className="mt-3 sm:mt-0 sm:ml-3"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                      >
                        <button
                          type="submit"
                          onClick={() => navigate(RoutePaths.CONTACTFORM)}
                          className="flex w-full items-center justify-center rounded-md px-4 py-2 overflow-hidden bg-primary dark:bg-primary ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-tertiaryOne shadow-lg focus:ring-offset-0 hover:ring-white dark:hover:ring-white text-lg text-white sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center hover:bg-primary/70 dark:hover:bg-slate-800"
                        >
                          <span className="text-md sm:text-lg font-serif font-semibold text-gray- dark:text-gray-50">
                            Contact Me
                          </span>
                        </button>
                      </div>
                      <div
                        className="mt-3 sm:mt-0 sm:ml-3"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                      >
                        <button
                          type="submit"
                          onClick={() => navigate(RoutePaths.NEWS)}
                          className="flex w-full items-center justify-center  rounded-md px-4 py-2 overflow-hidden bg-slate-400 dark:bg-slate-800 ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-gray-50  shadow-sm focus:ring-offset-0 hover:ring-white text-lg text-gray-100 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center hover:bg-primary/70 dark:hover:bg-slate-800 hover:shadow-lg"
                        >
                          <span className="text-md sm:text-lg font-serif font-semibold text-gray-50 dark:text-gray-50">
                            News corner
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 sm:mb-10">
              <div className="mx-auto max-w-md overflow-hidden px-4 sm:max-w-2xl sm:px-6  md:max-w-3xl md:px-8 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                 <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>     
    </>
  );
};
