import type { Metadata } from "next";
import DocsContent from "@/components/DocsContent";

export const metadata: Metadata = {
  title: "Docs — Getting Started | Aires",
  description:
    "How to install an AI research skill into your agent in under 5 minutes. No API keys. No code. No setup.",
};

export default function DocsPage() {
  return <DocsContent />;
}
