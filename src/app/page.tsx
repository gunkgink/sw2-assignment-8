import Banner from '@/components/Banner';
import PromoteCard from '@/components/PromoteCard';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-8">
        <Banner />
        <PromoteCard />
      </div>
    </main>
  );
}
