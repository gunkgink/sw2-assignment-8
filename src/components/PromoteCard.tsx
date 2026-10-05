"use client";

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center gap-4">
      <div className="w-full overflow-hidden rounded-lg">
        <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
      </div>
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors cursor-pointer"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
