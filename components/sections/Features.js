import Link from 'next/link';

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Features</h2>
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
      </div>
    </section>
  );
}