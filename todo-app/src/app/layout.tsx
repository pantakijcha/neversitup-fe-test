import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'

const inter = Inter({ subsets: ["latin"] });

type LayoutParams = {
  readonly children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Todo App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutParams) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
