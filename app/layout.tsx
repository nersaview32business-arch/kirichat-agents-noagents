import type { Metadata } from 'next';
import { Inter, Urbanist } from 'next/font/google';
import '../tailwind.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export const metadata: Metadata = {
  title: 'Kirichat',
  description: 'Build your first AI agents to answering customer question, book meetings, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable}`}>{children}</body>
    </html>
  );
}
