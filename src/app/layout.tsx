import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jabburr Blog | Insights & Innovations",
  description: "A premium minimalist blog for technology and design enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script 
          id="jabburr-ads-loader" 
          src="https://d29d5ugadf9lhp.cloudfront.net/storage/ads/conversion.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
