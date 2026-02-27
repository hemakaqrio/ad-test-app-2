import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="jabburr-ads-loader" strategy="afterInteractive">
          {`
            !function (w, d, elem, u) {
              if (w.tbo) return;
              let t = d.createElement(elem);
              t.async = !0;
              t.src = u;
              let s = d.getElementsByTagName(elem)[0];
              s.parentNode.insertBefore(t, s)
            }(window, document, 'script', 'https://dl67fuo54hogv.cloudfront.net/storage/ads/conversion.js')
          `}
        </Script>
        
        <Script id="jabburr-ads-init" strategy="afterInteractive">
          {`if (window.saf) { saf('track', 'view'); }`}
        </Script>

        {children}
      </body>
    </html>
  );
}
