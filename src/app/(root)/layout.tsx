import '@/styles/styles.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youtube sharing app',
  description: 'Welcome to Youtube video sharing Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
