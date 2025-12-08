// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numaan Suhaff – Portfolio",
  description:
    "Portfolio of Numaan Suhaff, a Computer Science student specializing in AI/ML, backend development, and full-stack engineering.",
  keywords: [
    "Numaan Suhaff",
    "portfolio",
    "AI",
    "machine learning",
    "backend developer",
    "computer science student",
    "anomaly detection",
    "Vision Transformer",
    "ViT",
    "DNE",
  ],
  openGraph: {
    title: "Numaan Suhaff – Portfolio",
    description:
      "Explore the portfolio of Numaan Suhaff: AI/ML, backend engineering, research projects, and interactive experiences.",
    url: "https://numaansuhaff.xyz",   // ✅ FIXED URL (NO www)
    siteName: "Numaan Suhaff",
    locale: "en_US",
    type: "website",
  },
};

// ✅ REQUIRED DEFAULT EXPORT — Next.js needs this for App Router
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
