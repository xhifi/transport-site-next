import { Poppins } from "next/font/google";
import "@/styles/global.scss";
import Navigation from "@/components/Navigation";

const poppins = Poppins({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Active Transport",
  description: "Transportation made easy",
};

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
