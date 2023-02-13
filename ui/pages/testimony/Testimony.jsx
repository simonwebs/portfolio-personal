// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Testimony = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
 <div className="overflow-hidden dark:bg-slate-800 border-b border-tertiaryOne/10">
   <div className="text-center">
        <h2 className="text-3xl mt-8  font-serif font-medium text-center text-sky-700 dark:text-tertiaryOne" data-aos="fade-right"
     data-aos-duration="2000">
          Testimonies
        </h2>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative lg:flex lg:items-center" data-aos="fade-left"
     data-aos-duration="2000">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
              src="https://res.cloudinary.com/swed-dev/image/upload/v1671005777/hqtihl0v5ycvq4cxotfe.jpg"
              alt=""
            />
          </div>

          <div className="relative lg:ml-10">
            <blockquote className="relative">
              <div className="text-2xl font-medium leading-9 text-gray-500 dark:text-tertiaryOne/60">
                <p>
                 There are so many things I had to do with my old software that I just don’t do at all with Swed. Suspicious but I can’t say I don’t love it.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://res.cloudinary.com/swed-dev/image/upload/v1671005777/hqtihl0v5ycvq4cxotfe.jpg"
                      alt="" data-aos="fade-right"
     data-aos-duration="2000"
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base font-medium text-gray-800 dark:text-white">Judith Black</div>
                    <div className="text-base font-medium text-cyan-600">CEO, Tuple</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
         <div className="mt-10 mb-5 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <div className="flex justify-center">
          <div className="relative overflow-hidden bg-primary dark:bg-transparent rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-white/10 ring-slate-400 hover:ring-slate-200 dark:ring-slate-600 hover:ring-white/20 dark:hover:ring-slate-400">
                  <span className="text-slate-100 dark:text-white">
                  Hire me{' '} &nbsp;
                    <a href="contactForm" className="font-semibold dark:text-cyan-400">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Click here <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
                </div>
      </div>
      </div>
    </div>
    </>
  );
};
