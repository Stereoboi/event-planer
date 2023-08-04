import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Alata } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const alata = Alata({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alata",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${alata.variable} `}>
        <Navbar />
        <div className="bg-hero bg-fixed bg-cover  min-h-screen">
          <div className="px-[24px] py-[40px] md:p-[40px] lg:px-[87px] lg:py-[18px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
