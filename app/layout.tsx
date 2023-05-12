import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/navbar/ClientOnly";
import Modal from "./components/modals/Modal";

export const metadata = {
	title: "Airdnd",
	description: "Vacation Homes & Condo Rentals - Airdnd - Airbnb",
};

const nunito = Nunito({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<ClientOnly>
          <Modal actionLabel="Submit" isOpen title="Hello World!"/>
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
