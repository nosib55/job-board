import Link from 'next/link';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Testimonials</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">What users say about JobBoard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black dark:text-white">John Doe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">"JobBoard helped me organize my job applications perfectly. I got my dream job thanks to the tracking features!"</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">JS</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black dark:text-white">Jane Smith</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">UX Designer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">"The interface is so clean and easy to use. I love how I can track all my applications in one place."</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">MJ</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black dark:text-white">Mike Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Project Manager</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">"Finally, a job board that actually helps with organization. Highly recommended!"</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Join Our Community
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}