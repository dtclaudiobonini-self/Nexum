import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Nexum-ICT | Più competenze. Un solo partner.";
  const description = "Nexum-ICT è il consorzio italiano di competenze tecnologiche per system integration, digital transformation, cybersecurity, AMS, ECM, BPM e pagamenti.";

  return {
    metadataBase,
    title,
    description,
    icons: { icon: "/brand/nexum-mark.png", shortcut: "/brand/nexum-mark.png" },
    openGraph: { title, description, type: "website", locale: "it_IT", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nexum-ICT - Più competenze. Un solo partner." }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
