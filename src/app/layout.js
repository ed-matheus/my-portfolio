import { Sora, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fonte para título
const sora = Sora({
	variable: "--font-sora",
	weight: ["600", "700"],
	subsets: ["latin"],
	display: "swap",
});

// Font para texto
const urbanist = Urbanist({
	variable: "--font-urbanist",
	weight: ["300", "400"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Ed Matheus | Web Designer",
	description: "Desenvolvedor WordPress e Front-end.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${sora.variable} ${urbanist.variable} antialiased bg-dark-500`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
