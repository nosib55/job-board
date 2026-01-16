import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Track Your Job Applications
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Organize and manage your job search with ease
            </p>
            <Link href="/jobs" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started
            </Link>
          </div>
        </section>

        {/* Section 2 */}
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

        {/* Section 3 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Simple steps to manage your job search</p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Benefits</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              <li>Free to use</li>
              <li>No registration required for browsing</li>
              <li>Secure login</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Testimonials</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">What users say about JobBoard</p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Get Started Today</h2>
            <Link href="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Browse Jobs
            </Link>
          </div>
        </section>

        {/* Section 7 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Contact Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Have questions? Reach out to us</p>
          </div>
        </section>
      </main>
    </div>
  );
}
