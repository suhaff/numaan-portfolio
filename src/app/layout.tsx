import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numaan Suhaff | Portfolio",
  description:
    "The 3D portfolio of Numaan Suhaff — CS student, developer, and AI enthusiast.",
};

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
