"use client";

import { useState } from 'react';
// import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Bumper",
//   description: "Give customers more flexibility at checkout",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${openSans.variable} ${oswald.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          {children}

          {process.env.NODE_ENV !== 'production' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </body>
    </html>
  );
}
