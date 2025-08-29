"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/layouts/navbar";
import styles from "@/pages/productsHome.module.css"
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {

  const currPath = usePathname()
 
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {currPath === '/' ? <div className={styles.scrollingBanner}>
      <p>🔥 Limited Time Offer - Get up to 50% OFF on Select Products! Shop Now 🔥</p>
      </div> : ""}
      
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
