'use client';

import React, { useState } from 'react';

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type === 'mouseover') {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }

  return (
    <div
      className={`w-[300px] h-[350px] overflow-hidden flex flex-col transition-all duration-300 ${
        isHovered
          ? 'shadow-2xl bg-neutral-200 rounded-lg'
          : 'shadow-lg bg-white rounded-lg'
      }`}
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
