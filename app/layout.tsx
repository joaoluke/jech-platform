import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JECH Programming Language",
  description: "Learn how programming languages work under the hood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <a href="/" className="text-xl font-bold">JECH</a>
              <nav className="flex items-center gap-6">
                <a href="/" className="text-sm font-medium">Início</a>
                <a href="/playground" className="text-sm font-medium">Playground</a>
                <a href="/docs" className="text-sm font-medium">Documentação</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-zinc-200 bg-zinc-50 py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm text-zinc-600">
                JECH Programming Language © {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
