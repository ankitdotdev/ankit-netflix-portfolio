// app/layout.tsx
import "./globals.css";
import Navbar from "@/shared/component/Navbar";
import Footer from "@/shared/component/Footer";

import { Roboto, Bebas_Neue, Black_Ops_One } from "next/font/google";

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

const blackOps = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-blackops",
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
    <html
      lang="en"
      className={`${roboto.variable} ${bebas.variable} ${blackOps.variable}`}
    >
      <body className="main">
        <Navbar />
        <div className="pageContent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
