// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

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
  title: "Top 10 Products - Premium Selection",
  description:
    "Discover our carefully curated selection of top 10 premium products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Header />
        <main>
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <Footer />
      </body>
    </html>
  );
}
