// components/layout/Header.tsx
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Top 10 Products
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
