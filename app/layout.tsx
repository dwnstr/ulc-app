import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "../context/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ULC | Dawnstar",
  description: "ULC is an all-in-one lighting controller for Non-ELS vehicles in FiveM! It uses the extra-based lighting stages on your vehicles and adds extra automation and improvements to create amazing, realistic, and fully-configurable lighting controls.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
