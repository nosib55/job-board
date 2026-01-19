import Link from 'next/link';

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Features</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Discover what makes JobBoard special</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Track Applications</h3>
              <p className="text-gray-600 dark:text-gray-400">Keep all your job applications in one place</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Organize by Status</h3>
              <p className="text-gray-600 dark:text-gray-400">Categorize applications by status</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Easy Access</h3>
              <p className="text-gray-600 dark:text-gray-400">Quick links to job postings</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Start Tracking Jobs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}