export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">How It Works</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Simple steps to manage your job search</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Browse Jobs</h3>
            <p className="text-gray-600 dark:text-gray-400">Explore available job opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Apply & Track</h3>
            <p className="text-gray-600 dark:text-gray-400">Apply to jobs and track your applications</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Get Hired</h3>
            <p className="text-gray-600 dark:text-gray-400">Receive interview calls and land your dream job</p>
          </div>
        </div>
      </div>
    </section>
  );
}