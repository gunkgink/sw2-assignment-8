# Venue Explorer - Assignment 08: React Hooks

This is a [Next.js](https://nextjs.org) application for venue exploration and booking built with React, Tailwind CSS, and Material UI (MUI).

## Vercel Deployment

- **Deployment URL:** _(Add live Vercel URL here upon deployment)_
  https://sw2-assignment-8.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Assignment 08 Features

- **VideoPlayer Component (`useRef` & `useEffect`):** Implemented video playback control via `useRef` and `useEffect` responding dynamically to `isPlaying` state.
- **PromoteCard Component (`useState`):** Displays a promotional video card on the homepage with an interactive Play/Pause toggle button.
- **Custom Hook `useWindowListener` (`useEffect`):** Custom hook that manages window event listeners with automatic cleanup, preventing contextmenu right-clicks on the page.
- **Route Group & Dynamic Segments:** Venue listing (`/venue`) and venue detail dynamic routing (`/venue/[vid]`).
- **Interactive Banner Image Rotation:** Banner with rotating cover images on click.
- **Top Navigation Bar:** Persistent navigation with logo and direct routing to booking and venues.
- **Rating Management:** Centralized state management using `useReducer` and `Map`.
