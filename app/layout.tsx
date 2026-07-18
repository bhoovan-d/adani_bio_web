import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Franklin } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SERIES_TITLE, SERIES_TAGLINE } from "@/lib/series";
import "./globals.css";

const caslon = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caslon",
});

const franklin = Libre_Franklin({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-franklin",
});

export const metadata: Metadata = {
  title: {
    default: `${SERIES_TITLE} — A Series`,
    template: `%s — ${SERIES_TITLE}`,
  },
  description: SERIES_TAGLINE,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${caslon.variable} ${franklin.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
