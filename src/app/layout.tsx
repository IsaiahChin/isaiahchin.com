import '../styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Isaiah Chin',
    template: '%s - Isaiah Chin',
  },
  description: 'Keen-eyed software developer. My personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} 
        max-w-5xl m-0 mx-auto 
        px-6 sm:px-16 
        flex flex-col min-h-screen 
        text-primary dark:text-light 
        bg-light dark:bg-secondary 
        transition-colors`}
      >
        <Providers>
          <Header />
          <main className="w-full py-16 flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
