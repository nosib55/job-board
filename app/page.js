import Link from 'next/link';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import GetStarted from '@/components/sections/GetStarted';

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

        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <GetStarted />
      </main>
    </div>
  );
}
