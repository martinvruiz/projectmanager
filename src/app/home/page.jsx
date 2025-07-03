"use client";

import { FeatureCard } from "@/components/FeaturedCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="h-auto text-gray-800 flex md:pt-24 pt-4 justify-center px-4 md:px-0">
      <section className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-10 md:p-16 flex flex-col items-center text-center md:space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">
            Organize your projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Plan, prioritize and track your tasks in one simple app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full">
          <FeatureCard title="Create Projects" />
          <FeatureCard title="Manage Tasks" />
          <FeatureCard title="Track Progress" />
        </div>

        <Link
          href="/projects"
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
