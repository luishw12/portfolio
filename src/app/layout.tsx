import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis H. Wendt | Desenvolvedor Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
