"use client";

import { useStore } from "@/stores/useStore";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  const initializeProfile = useStore((state) => state.initializeProfile);

  useEffect(() => {
    initializeProfile();
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 text-gray-800 md:pt-32 pt-12 px-4">
      <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="md:text-5xl text-3xl font-extrabold leading-tight">
          Welcome to Project Manager
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Manage your projects efficiently with this simple and intuitive app
          built with Next.js and Tailwind CSS.
        </p>
        <div className="pt-8">
          <Link
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            href={"/projects"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
