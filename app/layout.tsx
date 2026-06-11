import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aires.skills"),
  title: "Aires — AI Research SKILLs",
  description:
    "98 AI research skills across 23 categories. Full lifecycle from hypothesis to paper. Power any AI agent with Orchestra Research's open-source skill library.",
  openGraph: {
    title: "Aires — AI Research SKILLs",
    description: "98 skills. 23 categories. Full AI research lifecycle.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-bg text-text antialiased font-sans">
        <Nav />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
