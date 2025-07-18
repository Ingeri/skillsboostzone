// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
