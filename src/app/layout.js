"use client";
import { Inter, Poppins } from "next/font/google";
import "@/styles/global.scss";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
