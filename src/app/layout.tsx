import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Find the perfect venue for your events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params?: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col w-full">
        <TopMenu />
        <div className="pt-[50px] w-full flex-1 flex flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
