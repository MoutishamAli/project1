import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "./components/topheader/topheader";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Majid Hussain Hackathon",
  description: "00317785",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
