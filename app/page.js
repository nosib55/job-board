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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Get Started
              </Link>
              <Link href="/features" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation to Other Sections */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Explore JobBoard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/features" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Features</h3>
                <p className="text-gray-600 dark:text-gray-400">Discover our powerful tools</p>
              </Link>
              <Link href="/how-it-works" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">How It Works</h3>
                <p className="text-gray-600 dark:text-gray-400">Simple steps to success</p>
              </Link>
              <Link href="/benefits" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Benefits</h3>
                <p className="text-gray-600 dark:text-gray-400">Why choose JobBoard</p>
              </Link>
              <Link href="/testimonials" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Testimonials</h3>
                <p className="text-gray-600 dark:text-gray-400">What users are saying</p>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/get-started" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
