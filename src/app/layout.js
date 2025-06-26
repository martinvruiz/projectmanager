import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Project Manager",
  description: "Keep things organized.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased w-screen min-h-screen bg-gray-400 text-black`}
      >
        {children}
      </body>
    </html>
  );
}
