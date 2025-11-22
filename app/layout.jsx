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
  title: "Book-Publish",
  icons: {},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body
    className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}  antialiased bg-[#F4F4F7] flex flex-col min-h-screen`}
  >
    <Navbar />

    {/* Page Content */}
    <main className="flex-grow">
      {children}
    </main>

    <Footer />
  </body>
</html>
  );
}
