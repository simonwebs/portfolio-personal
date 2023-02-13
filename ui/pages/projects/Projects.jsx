import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const people = [
  {
    name: 'Jotter',
    role: 'Todo app',
    imageUrl:
      'https://res.cloudinary.com/swed-dev/image/upload/v1676290989/yi2gmwmj0vnctsa0ix6l.jpg',
    bio: 'This was created with Chakra-UI, react and meteor.',
    link: 'https://jotter.meteorapp.com/',
  },
   {
    name: 'Cedar Christian Bilingual School',
    role: 'School web app',
    imageUrl:
      'https://res.cloudinary.com/swed-dev/image/upload/v1676290990/ng50xzdvambz3n5wtsko.jpg',
    bio: 'This school web app was build with meteor, tailwindcss and react.',
    link: 'https://cedarschool.meteorapp.com/',
  },
   {
    name: 'Church web app',
    role: 'Web app for local church',
    imageUrl:
      'https://res.cloudinary.com/swed-dev/image/upload/v1676291029/rpzw7quvw0t3clyleelw.jpg',
    bio: 'This church web app was build with meteor, tailwindcss and react.',
    link: 'https://imsgh.meteorapp.com/',
  },
  // More people...
]

export const Projects = () => {
  return (
    <div className="bg-gray-100 py-24 md:py-32 dark:bg-slate-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-gray-100 sm:text-4xl">Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            These projects are works am working on and they are already running on
            freemode in meteor cloud. Though not fully completed.
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">{person.name}</h3>
                <p className="text-base leading-7 text-primary dark:text-primary">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">{person.bio}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.link} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Link to demo app</span>
                        <span className="sr-only">View notifications</span>
                  <ArrowRightIcon className="h-7 w-10 text-lg font-bold text-primary dark:text-gray-100" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}