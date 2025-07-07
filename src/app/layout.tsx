import "./globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Joud Olive Oil",
  description: "Premium Olive Oil Vending",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans min-h-screen">
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
