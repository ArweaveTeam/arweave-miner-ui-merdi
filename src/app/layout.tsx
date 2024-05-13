'use client'

//import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import Navbar from "./dashboard/components/Navbar";

const roboto = Roboto_Mono({ subsets: ["latin"] });

/*export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={roboto.className}>
        <Navbar/>
      <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
