'use client';

import Lottie from 'lottie-react';

// Loading Lottie animation URL
const loadingAnimation = 'https://assets5.lottiefiles.com/packages/lf20_usmfx6bp.json';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4">
          <Lottie path={loadingAnimation} loop={true} />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}