// app/ClientLayout.tsx (Client Component)
"use client";

import { TransitionProvider } from "./providers/TransitionProvider";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import Footer from "./components/layout/Footer";
// ... import other components

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

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
    >
      <Header />
      <main>
        <ErrorBoundary>
          <TransitionProvider>{children}</TransitionProvider>
        </ErrorBoundary>
      </main>
      <Footer />
    </body>
  );
}
