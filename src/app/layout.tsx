import type { Metadata } from 'next';
import '@/styles/GlobalStyles.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'HobbySel',
  description: 'Counseling on your hobbies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="w-full h-dvh">
        <Header />
        <main className="px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
