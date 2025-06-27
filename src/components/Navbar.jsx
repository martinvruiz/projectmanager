import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 w-full h-20 py-6 fixed bottom-0 md:top-0 md:bottom-auto left-0 z-50 border-t md:border-t-0 border-gray-700">
      <div className="flex items-center justify-center mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-100 text-lg font-semibold hover:text-indigo-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-100 text-lg font-semibold hover:text-indigo-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              className="text-gray-100 text-lg font-semibold hover:text-indigo-400"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
