import Link from 'next/link';

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="w-[120px] text-center my-auto font-sans text-sm md:text-base text-gray-600 hover:text-black transition-colors"
    >
      {title}
    </Link>
  );
}
