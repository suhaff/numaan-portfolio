import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://numaan-portfolio-numaan-suhaffs-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Numaan Suhaff | Software Engineer & AI/ML Developer",
    template: "%s | Numaan Suhaff",
  },
  description:
    "Numaan Suhaff is a Software Engineering student at Universiti Sains Malaysia, building full-stack products and exploring AI, machine learning, and computer vision.",
  applicationName: "Numaan Suhaff Portfolio",
  authors: [{ name: "Numaan Suhaff", url: siteUrl }],
  creator: "Numaan Suhaff",
  publisher: "Numaan Suhaff",
  keywords: [
    "Numaan Suhaff",
    "software engineer",
    "software engineering student",
    "AI developer",
    "machine learning",
    "computer vision",
    "full-stack developer",
    "Next.js developer",
    "PyTorch",
    "Universiti Sains Malaysia",
    "Penang Malaysia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Numaan Suhaff",
    title: "Numaan Suhaff | Software Engineer & AI/ML Developer",
    description:
      "Explore the work of Numaan Suhaff — software engineering, AI research, computer vision, and full-stack development.",
    locale: "en_MY",
  },
  twitter: {
    card: "summary",
    title: "Numaan Suhaff | Software Engineer & AI/ML Developer",
    description:
      "Software engineering, AI research, computer vision, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Numaan Suhaff",
    url: siteUrl,
    jobTitle: "Software Engineering Student",
    description:
      "Software engineering student focused on full-stack development, artificial intelligence, machine learning, and computer vision.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universiti Sains Malaysia",
    },
    knowsAbout: [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Full-Stack Development",
      "Python",
      "PyTorch",
      "Next.js",
      "React",
      "TypeScript",
    ],
    sameAs: ["https://github.com/suhaff"],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
