import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Luxury Portfolio",
  description: "Showcasing excellence in digital marketing and creative services"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.className}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        {/* Main Content */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
