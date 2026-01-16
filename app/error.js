'use client';

import Lottie from 'lottie-react';
import { useEffect } from 'react';

// Error Lottie animation URL
const errorAnimation = 'https://assets5.lottiefiles.com/packages/lf20_kcsr6fcp.json';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="text-center">
        <div className="w-64 h-64 mx-auto mb-8">
          <Lottie animationData={errorAnimation} loop={true} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          We encountered an error. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}