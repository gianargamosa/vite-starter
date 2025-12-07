import { Link } from "react-router";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Vite + React + Prisma Starter
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A modern full-stack starter template with Vite, React Router, Prisma, and Tailwind CSS.
        </p>
        <div className="mb-12">
          <Link
            to="/counter"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Try Counter Demo →
          </Link>
        </div>
        <ul className="space-y-6 text-left bg-white rounded-lg shadow-lg p-8">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm mr-3">
              ✓
            </span>
            <div>
              <strong className="text-gray-900">React Router 7</strong>
              <span className="text-gray-600">. Modern routing with file-based conventions and SSR support.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">
              ✓
            </span>
            <div>
              <strong className="text-gray-900">Prisma ORM</strong>
              <span className="text-gray-600">. Type-safe database access with migrations and schema management.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm mr-3">
              ✓
            </span>
            <div>
              <strong className="text-gray-900">Vite</strong>
              <span className="text-gray-600">. Lightning-fast development with HMR and optimized builds.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm mr-3">
              ✓
            </span>
            <div>
              <strong className="text-gray-900">Tailwind CSS</strong>
              <span className="text-gray-600">. Utility-first CSS framework for rapid UI development.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
