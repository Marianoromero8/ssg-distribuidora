import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/NavBar";
import WhatsAppButton from "./common/whatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "SSG Distribuidora",
  description: "Distribucion de alimentos para negocios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="Distribuidora-SSG_Logo-Blanco_2024.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased bg-[#e8decb]`}
      >
        <NavBar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
