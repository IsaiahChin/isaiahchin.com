import '../styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/header';

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
      <body className={`${inter.variable} ${poppins.variable} text-slate-900`}>
        <Header />
        <main className="mx-auto max-w-6xl min-h-screen w-full p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
