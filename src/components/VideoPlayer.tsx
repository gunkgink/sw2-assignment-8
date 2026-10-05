"use client";

import { useRef, useEffect } from "react";

export default function VideoPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vdoRef.current) {
      if (isPlaying) {
        vdoRef.current.play();
      } else {
        vdoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <video
      ref={vdoRef}
      src={vdoSrc}
      controls
      loop
      muted
      className="w-full rounded-lg shadow-md"
    />
  );
}
