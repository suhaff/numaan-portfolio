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
    "ViT",
    "DNE",
  ],
  openGraph: {
    title: "Numaan Suhaff – Portfolio",
    description:
      "Explore the portfolio of Numaan Suhaff: AI/ML, backend engineering, research, projects, and interactive builds.",
    url: "https://www.numaansuhaff.xyz",
    siteName: "Numaan Suhaff",
    locale: "en_US",
    type: "website",
  },
};

// ✅ REQUIRED DEFAULT EXPORT
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
