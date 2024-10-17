import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  weight: ["300", "700"],
  subsets: ["vietnamese", "latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "IntraHacktive 1.0 | Organized by BRAC University Computer Club",
  description: "",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <NavBar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
