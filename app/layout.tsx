import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dev portfolio for me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className}
        antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
