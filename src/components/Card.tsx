'use client';

import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import InteractiveCard from './InteractiveCard';

interface CardProps {
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venue: string, rating: number) => void;
}

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  const [rating, setRating] = useState<number | null>(0);

  return (
    <InteractiveCard>
      <div className="relative w-full h-[65%] bg-slate-200 flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={venueName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-4 h-[35%] flex flex-col items-center justify-center text-center gap-2">
        <h2 className="text-lg font-bold text-gray-800">
          {venueName}
        </h2>
        <div onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
              if (onRatingChange) {
                onRatingChange(venueName, newValue !== null ? newValue : 0);
              }
            }}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}
