import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutContent from './LayoutContent';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JobBoard - Job Application Tracker",
  description: "Track your job applications easily",
  icons: {
    icon: '/jobboard-icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}
