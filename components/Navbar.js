"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-black dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            JobBoard
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/jobs"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
            >
              Jobs
            </Link>

            <Link
              href="/my-applications"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
            >
              My Applications
            </Link>

            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
            >
              About
            </Link>

            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-black dark:text-white"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
            >
              Jobs
            </Link>

            <Link
              href="/my-applications"
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
            >
              My Applications
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
            >
              About
            </Link>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 font-medium"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
