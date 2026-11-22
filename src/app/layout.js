
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "BookNook | Your Little Library",
  description:
    "Discover, borrow, and enjoy wonderful books with BookNook.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fffef9] text-gray-800 antialiased">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}



