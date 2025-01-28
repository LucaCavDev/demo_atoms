import type { Metadata } from "next";
import { Geist, Geist_Mono, Anybody } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anybody = Anybody({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-anybody',
});

export const metadata: Metadata = {
  title: "Demo Atoms",
  description: "Demo Atoms created by Luca Cavicchioli with Next.js and deployed with Vercel.",
  authors: [{ name: "Luca Cavicchioli" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anybody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
