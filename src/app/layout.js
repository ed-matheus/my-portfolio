import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ed Matheus | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
