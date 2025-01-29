// app/layout.tsx
import type { Metadata } from "next";
import "./styles/globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Top 10 Products - Premium Selection",
  description:
    "Discover our carefully curated selection of top 10 premium products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
