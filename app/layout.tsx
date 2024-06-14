import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trello clone",
  description: "Use nextJS clone web trello.",
  icons: [
    {
      url: "@/styles/logo.svg",
      href: "@/styles/logo.svg"
    }
  ]
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}