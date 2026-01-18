export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About JobBoard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Connecting talent with opportunities
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            JobBoard is dedicated to simplifying the job search process by providing a modern,
            user-friendly platform where job seekers can discover opportunities and employers
            can find the perfect candidates. We believe in making career connections seamless
            and efficient.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Comprehensive job listings across various industries</li>
            <li>Advanced search and filtering capabilities</li>
            <li>Application tracking for job seekers</li>
            <li>Easy job posting for employers</li>
            <li>Modern, responsive design with dark mode support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Built with Next.js 16, React 19, Tailwind CSS v4, and modern web technologies
            to ensure fast, reliable, and accessible user experiences.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Ready to find your next opportunity? <a href="/jobs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Browse jobs</a> or <a href="/login" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">sign in</a> to get started.
          </p>
        </div>
      </div>
    </div>
  );
}