import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/component/Navbar";
import Footer from "@/shared/component/Footer";

export const metadata: Metadata = {
  title: "Ankit Mishra",
  description:
    "This is my Netflix portfolio based on inspiration from many developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="main">
        <Navbar />
        <div className="pageContent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
