import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const basePath = process.env.NODE_ENV === "production" ? "/SpiceCateringBD" : "";

export const metadata: Metadata = {
  title: "Spice Catering Ltd. | Dhaka, Bangladesh",
  description:
    "Bangladesh's premier catering company. Serving corporate events, weddings, and house parties with authentic flavours and world-class service since 2006.",
  keywords: "spice catering, catering dhaka, bangladesh catering, wedding catering, corporate catering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/svg+xml" href={`${basePath}/assets/spice-logo.svg`} />
        <link rel="icon" type="image/png" href={`${basePath}/assets/spicecatering-logo.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/assets/spicecatering-logo.png`} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
