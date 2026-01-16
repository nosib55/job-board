import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white">
              JobBoard
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Track job applications easily and stay organized.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/my-applications"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  My Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Contact
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Email: support@jobboard.com
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Phone: +880 1234-567890
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 JobBoard. All rights reserved.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
