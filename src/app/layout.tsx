import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cinzel, tinos, cormorantGaramond } from "./fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariel Vincennao - Portafolio",
  description: "Portafolio Ariel Vincennao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${tinos.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
