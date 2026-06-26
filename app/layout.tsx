import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  DM_Mono,
} from "next/font/google";
import Nav from "@/components/Nav";
import AmbientBackground from "@/components/AmbientBackground";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aires.skills"),
  title: "Aires — AI Research SKILLs",
  description:
    "98 AI research skills across 23 categories. Full lifecycle from hypothesis to paper. Built on the open-source AI-Research-SKILLs library (MIT) — install into any AI agent.",
  openGraph: {
    title: "Aires — AI Research SKILLs",
    description: "98 skills. 23 categories. Full AI research lifecycle.",
    images: [{ url: "/Logo.webp", width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      {
        url: "/Logo.webp",
        type: "image/webp",
      },
    ],
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
      className={`${bricolage.variable} ${cormorant.variable} ${jakarta.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg text-text antialiased font-sans">
        <AmbientBackground />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
