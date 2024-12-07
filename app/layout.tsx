import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Morgan Hacks",
  description: "This is Morgan Hacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <html lang="en">
      <body
        className={`w-full h-full ${geistSans.variable} ${geistMono.variable} antialiased`}  style={ {backgroundImage: "url('assets/space-background.jpg')"} }
        >

        <NavBar>
        {children}
        </NavBar>
      </body>
    </html>
  );
}
