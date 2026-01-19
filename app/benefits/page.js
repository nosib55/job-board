import Link from 'next/link';

export default function Benefits() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Benefits</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Why choose JobBoard for your job search</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Free to use</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">✓</div>
                <span className="text-gray-700 dark:text-gray-300">No registration required for browsing</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Secure login</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Responsive design</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Track application status</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Organize by company and location</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Link href="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Start Your Job Search
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}