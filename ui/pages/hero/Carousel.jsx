import React, { useState, useEffect } from 'react';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const items = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/swed-dev/image/upload/v1675076659/nxs9uoe3brluvxtdf7mr.avif',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/swed-dev/image/upload/v1676290990/ng50xzdvambz3n5wtsko.jpg',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/swed-dev/image/upload/v1676291029/rpzw7quvw0t3clyleelw.jpg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/swed-dev/image/upload/v1675245985/pabafasa3hrzo3u9j0wy.jpg',
      alt: 'Image 4',
    },
  ];

  return (
     <div className="relative w-full h-76">
      <div className="overflow-hidden h-full">
        <img src={items[currentIndex].src} alt={items[currentIndex].alt} className="w-[76rem] border-3 border-black rounded-tl-full rounded-br-full shadow-2xl shadow-primary/50 hover:rounded-lg ring-1 ring-primary/10" />
      </div>
    </div>
  );
};
