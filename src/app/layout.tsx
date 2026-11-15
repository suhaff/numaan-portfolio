import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numaan Suhaff — Software Engineer & Builder",
  description: "The portfolio of Numaan Suhaff: software engineering, AI research, full-stack development, and thoughtful digital products.",
  metadataBase: new URL("https://numaan-portfolio.vercel.app"),
  openGraph: {
    title: "Numaan Suhaff — Software Engineer & Builder",
    description: "Curious by nature. Builder by choice.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
