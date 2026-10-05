import Image from 'next/image';

const mockVenueRepo = new Map<string, { name: string; imgSrc: string; description: string }>([
  [
    '001',
    {
      name: 'The Bloom Pavilion',
      imgSrc: '/img/bloom.jpg',
      description:
        'A charming greenhouse-style venue surrounded by lush gardens, perfect for romantic weddings and intimate celebrations.',
    },
  ],
  [
    '002',
    {
      name: 'Spark Space',
      imgSrc: '/img/sparkspace.jpg',
      description:
        'A modern, tech-forward event hub designed for innovative corporate meetups, hackathons, and seminars.',
    },
  ],
  [
    '003',
    {
      name: 'The Grand Table',
      imgSrc: '/img/grandtable.jpg',
      description:
        'An opulent dining hall offering world-class catering and an elegant atmosphere for grand banquets and galas.',
    },
  ],
]);

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueDetail = mockVenueRepo.get(vid);

  if (!venueDetail) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-gray-800">Venue Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[300px]">
            <Image
              src={venueDetail.imgSrc}
              alt={venueDetail.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              {venueDetail.name}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {venueDetail.description}
            </p>
            <div className="text-sm font-semibold text-gray-400">
              Venue ID: {vid}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}