import { Manrope } from "next/font/google";
import "./globals.css";
import Initializer from "@/components/Initializer";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

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
        <Initializer />
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          toastStyle={{ position: "fixed", zIndex: 9999 }}
        />
        {children}
      </body>
    </html>
  );
}
