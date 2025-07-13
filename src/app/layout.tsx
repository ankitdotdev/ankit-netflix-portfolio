// app/layout.tsx
import "./globals.css";
import Navbar from "@/shared/component/Navbar";
import Footer from "@/shared/component/Footer";
import { Roboto } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Ankit Mishra",
  description:
    "This is my Netflix portfolio based on inspiration from many developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${bebas.variable}`}>
      <body className="main">
        <Navbar />
        <div className="pageContent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
