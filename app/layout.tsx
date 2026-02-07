import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep standard fonts or change to Inter as per plan? User said "e.g. from Google Fonts like Inter...". I'll use default for now to keep it simple as I didn't install Inter, actually create-next-app uses Geist by default now.
import "./globals.css";
import { Header, Footer } from "@/components/Layout";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Configuration APN Free Mobile | Tuto 4G/5G Android & iPhone",
  description: "Comment configurer les MMS et Internet Free Mobile sur votre smartphone ? Tutoriels étape par étape pour Samsung, Xiaomi, iPhone, Oppo...",
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL("https://freemobileandroid.fr"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
