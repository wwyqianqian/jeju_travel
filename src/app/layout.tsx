import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeju Glass Sea - My Travel Planner",
  description: "Personalized Jeju Island travel planner with glassmorphism aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-teal-50 via-white to-sky-100 min-h-screen text-slate-800 selection:bg-sky-200 selection:text-sky-900`}>
        {children}
      </body>
    </html>
  );
}
