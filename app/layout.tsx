import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flashcards",
  description: "Create flashcards to learn anything",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="[grid-template-areas:'header''body'] grid h-screen grid-rows-[auto_1fr] overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
