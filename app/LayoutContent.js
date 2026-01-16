'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from './providers';

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const showNavFooter = !pathname.startsWith('/login') && !pathname.startsWith('/error') && !pathname.startsWith('/404');

  return (
    <>
      {showNavFooter && <Navbar />}
      <Providers>
        {children}
      </Providers>
      {showNavFooter && <Footer />}
    </>
  );
}