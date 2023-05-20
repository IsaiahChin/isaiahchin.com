import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  authors: [{ name: 'Isaiah Chin' }],
  description: 'Keen-eyed software developer. My personal website',
  title: {
    default: 'Isaiah Chin',
    template: '%s - Isaiah Chin',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/favicon.ico' },
  ],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${poppins.className} overflow-x-hidden
        max-w-5xl m-0 mx-auto 
        px-6 flex flex-col min-h-screen 
        text-primary dark:text-light 
        bg-light dark:bg-secondary 
        transition-colors`}
      >
        <Providers>
          <Header />
          <main className="w-full my-8 flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
