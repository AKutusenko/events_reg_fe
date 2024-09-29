import type { Metadata } from 'next';

import { ReduxProvider, NotistackProvider } from '@/providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Events website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NotistackProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </NotistackProvider>
      </body>
    </html>
  );
}
