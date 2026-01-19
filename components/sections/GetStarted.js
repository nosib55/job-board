import Link from 'next/link';

export default function GetStarted() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Get Started Today</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Join thousands of job seekers who are successfully managing their career search with JobBoard
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">For Job Seekers</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Browse jobs, track applications, and organize your job search all in one place.
            </p>
            <Link href="/jobs" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Browse Jobs
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">For Employers</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Post job opportunities and connect with qualified candidates.
            </p>
            <Link href="/login" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              Post a Job
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Ready to Get Started?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Create your account today and start tracking your job applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Sign In
            </Link>
            <Link href="/jobs" className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}