import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";

import "./globals.css";

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bumper",
  description: "Give customers more flexibility at checkout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
