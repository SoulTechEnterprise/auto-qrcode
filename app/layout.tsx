import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["QR Code", "imóveis", "corretores", "placas de venda", "QR dinâmico"],
  authors: [{ name: "Placa QRCode" }],
  icons: {
    icon: "/logo-qrcode.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager dataLayerName="google-tag-manager" gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!} gtmScriptUrl={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_URL!} />

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
