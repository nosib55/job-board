export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Benefits</h2>
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
      </div>
    </section>
  );
}