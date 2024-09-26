import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { FooterComponent } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Space Launch Foundation",
  description: "Democratizing Space Launch Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col min-h-screen md:mt-12 mt-8">
          {children}
        </div>
        <FooterComponent />
        <GoogleTagManager gtmId="GTM-KF99QDD" />
      </body>
    </html>
  );
}
