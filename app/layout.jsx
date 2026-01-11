import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Scholint Publishers",
  description:
    "Scholint Publishers — advancing academic publishing and global open access research.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Google Search favicon (CRITICAL) */}
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />

        {/* SVG fallback */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Apple */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-[#F4F4F7] flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
