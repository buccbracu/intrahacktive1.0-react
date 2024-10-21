import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { Toaster } from "sonner";
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
        {" "}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />{" "}
      </Head>
      <body className={spaceGrotesk.className}>
        <NavBar />
        <Toaster position="bottom-right" richColors />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
