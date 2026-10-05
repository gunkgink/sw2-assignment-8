'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Banner() {
  const covers = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg',
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <div
      className="relative w-full h-[350px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg mb-8 bg-gray-800 cursor-pointer"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="Venue Banner"
        fill
        sizes="100vw"
        className="object-cover brightness-75"
        priority
        unoptimized
      />
      <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 h-full bg-black/40 text-white pointer-events-none">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
          where every event finds its venue
        </h1>
        <p className="text-base md:text-lg max-w-2xl text-gray-200 drop-shadow">
          Finding the perfect venue has never been easier. Whether it&apos;s a wedding, corporate event, or private party, we connecting people to the perfect place.
        </p>
      </div>
      <button
        className="bg-white text-cyan-800 border border-cyan-800 font-semibold py-2 px-3 m-4 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-800 hover:text-white transition duration-300 pointer-events-auto"
        onClick={(e) => {
          e.stopPropagation();
          router.push('/venue');
        }}
      >
        Select Venue
      </button>
    </div>
  );
}
