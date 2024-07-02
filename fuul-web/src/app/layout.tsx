import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@components";

import "../styles/globals.css";
import "fuul-sdk/styles/fuul-styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuul Frontend Challenge",
  description: "This is a description for Fuul Frontend Challenge :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full max-w-[1280px]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
