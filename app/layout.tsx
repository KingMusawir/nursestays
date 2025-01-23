import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TravelStays',
  description: 'Find your perfect stay travel nurse housing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
