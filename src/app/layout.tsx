import type { Metadata } from "next";
import "./globals.css";
import "@/styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trixtern — Engineering Intentionality",
  description: "We build digital ecosystems for the world's most ambitious brands, focusing on clarity, precision, and measurable impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
