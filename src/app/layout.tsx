import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: process.env.CLIENT_NAME,
  description: process.env.CLIENT_DESC,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#0f0f0f] select-none ${poppins.className}`}>
        {children}
      </body>
    </html>
  )
}
