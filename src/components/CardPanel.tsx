'use client';

import { useReducer } from 'react';
import Link from 'next/link';
import Card from './Card';

type RatingAction =
  | { type: 'set'; venue: string; rating: number }
  | { type: 'remove'; venue: string };

const initialVenues: [string, number][] = [
  ['The Bloom Pavilion', 0],
  ['Spark Space', 0],
  ['The Grand Table', 0],
];

const ratingReducer = (
  state: Map<string, number>,
  action: RatingAction
): Map<string, number> => {
  switch (action.type) {
    case 'set': {
      const newMap = new Map(state);
      newMap.set(action.venue, action.rating);
      return newMap;
    }
    case 'remove': {
      const newMap = new Map(state);
      newMap.delete(action.venue);
      return newMap;
    }
    default:
      return state;
  }
};

const venueResponse = [
  { vid: '001', name: 'The Bloom Pavilion', imgSrc: '/img/bloom.jpg' },
  { vid: '002', name: 'Spark Space', imgSrc: '/img/sparkspace.jpg' },
  { vid: '003', name: 'The Grand Table', imgSrc: '/img/grandtable.jpg' },
];

export default function CardPanel() {
  const [ratingMap, dispatch] = useReducer(
    ratingReducer,
    new Map<string, number>(initialVenues)
  );

  const handleRatingChange = (venue: string, rating: number) => {
    dispatch({ type: 'set', venue, rating });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-row flex-wrap justify-around items-center gap-6 my-8 w-full">
        {venueResponse.map((venue) => (
          <Link
            key={venue.vid}
            href={`/venue/${venue.vid}`}
            className="w-[300px] h-[350px] block"
          >
            <Card
              venueName={venue.name}
              imgSrc={venue.imgSrc}
              onRatingChange={handleRatingChange}
            />
          </Link>
        ))}
      </section>

      <div className="w-full max-w-md mx-auto my-6 p-6 bg-white rounded-xl shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Venue List with Ratings: {ratingMap.size}
        </h3>
        <div className="flex flex-col gap-2">
          {Array.from(ratingMap.entries()).map(([venue, rating]) => (
            <div
              key={venue}
              data-testid={venue}
              onClick={() => dispatch({ type: 'remove', venue })}
              className="cursor-pointer p-3 bg-gray-50 hover:bg-red-50 hover:text-red-600 rounded-lg border border-gray-200 transition-colors font-medium text-gray-700 flex justify-between items-center"
            >
              {venue}: {rating}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
