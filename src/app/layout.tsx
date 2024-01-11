import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/GlobalStyles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HobbySel',
  description: 'Counseling on your hobbies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
