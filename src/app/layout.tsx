import '../styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
  description: 'A design-driven developer with an eye for detail',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} max-w-5xl mx-auto text-slate-900 bg-stone-100 dark:text-stone-100 dark:bg-stone-900`}
      >
        <Header />
        <main className="min-h-screen w-full p-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
