import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { Toaster } from "sonner";
import AnnouncementBar from "./components/announcement-bar";
import BootstrapClient from "./components/BootstrapClient";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

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
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          defer
        />
      </Head>
      <body className={spaceGrotesk.className}>
        <AnnouncementBar />
        <NavBar />
        <Toaster position="bottom-right" richColors />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
