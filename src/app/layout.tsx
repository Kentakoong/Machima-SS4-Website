import { Footer } from "@machima/layouts/Footer/Footer";
import { Navbar } from "@machima/layouts/Navbar/Navbar";
import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const noto = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "Machima Season 4",
  description: "Go farther, together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${noto.className}`}>
        <main className="relative flex h-screen flex-col overflow-x-hidden">
          <div className="absolute top-0 left-0 right-0">
            <Navbar />
          </div>
          <div className="pt-20 flex grow flex-col">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
