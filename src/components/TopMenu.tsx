import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-b border-gray-200 flex flex-row items-center justify-end px-5 space-x-6">
      <TopMenuItem title="Booking" pageRef="/booking" />
      <Image
        src="/img/logo.png"
        className="h-full w-auto py-1 object-contain"
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
        priority
        unoptimized
      />
    </div>
  );
}
