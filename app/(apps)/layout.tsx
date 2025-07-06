"use client";

import { Providers } from "@/app/providers";
import { Metadata } from "next";
import { poppins } from "@/config/fonts";
import clsx from "clsx";

// Apps sayfaları için tamamen bağımsız layout
export default function AppsGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 