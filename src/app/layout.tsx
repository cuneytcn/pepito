import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pepito - Veteriner Kliniği',
  description:
    'Evcil hayvanınızın sağlığı ve mutluluğu için profesyonel veteriner hizmetleri.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="font-display">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
