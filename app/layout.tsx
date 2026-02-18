import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Jones — Front-End Developer",
  description:
    "Front-end developer based in Nigeria. Building beautiful, performant web experiences with React, Next.js, and TypeScript.",
  keywords: [
    "front-end developer",
    "React",
    "Next.js",
    "TypeScript",
    "Nigeria",
    "web developer",
    "portfolio",
  ],
  openGraph: {
    title: "Jacob Jones — Front-End Developer",
    description:
      "Front-end developer based in Nigeria. Building beautiful, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
