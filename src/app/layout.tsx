import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { firm, landing } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#19343C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mk-mboya-advocates.vercel.app"),
  title: {
    default: `${firm.name} — ${firm.tagline.replace(/\.$/, "")}`,
    template: `%s · ${firm.shortName}`,
  },
  description: landing.lead,
  icons: {
    icon: [
      { url: "/logo/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo/apple-touch.png",
  },
  openGraph: {
    title: firm.name,
    description: landing.lead,
    locale: "en_KE",
    type: "website",
    images: [{ url: "/logo/inverted.png", width: 1024, height: 512 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-KE" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-ink">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
