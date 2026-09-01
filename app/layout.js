import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mohosin Reza | Full Stack Developer",
  description: "Modern web developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-outfit">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}