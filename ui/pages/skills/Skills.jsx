import React from 'react'

export const Skills = () => {
  return (
    <>
      <div id='skills'className="bg-transparent border-b border-tertiaryOne/10 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
         <div className="text-center">
        <h2 className="text-3xl mt-8  font-serif font-medium text-center text-sky-700 dark:text-tertiaryOne" data-aos="fade-right"
     data-aos-duration="2000">
          My Skills
        </h2>
      </div>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005776/pmcnloldywmixlb62jku.png"
                alt="Html"
              />
            </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005775/qoao7nmoqjrwtvdq0xk1.png"
                alt="CSS"
              />
            </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005776/roqzliylotezsdsbdxo3.png"
                alt="JavaScript"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005776/rtqenmt8xnlky8861hjn.png"
                alt="Nodejs"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005776/poj9wyiogfak9eq3ocvf.png"
                alt="Meteor"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005775/mkkpp5yxltc0tgrymadr.jpg"
                alt="Bootstrap"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005778/kgxyvlhq3lazxkggbniy.png"
                alt="tailwindcss-tailwindui"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

