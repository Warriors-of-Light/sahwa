import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/fonts.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "منصة صحوة",
  description: "اول منصة تعليمية تفاعلية مفتوحة مبنية بأيدي عربي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} !bg-white`}>
        {children}
      </body>
    </html>
  );
}
