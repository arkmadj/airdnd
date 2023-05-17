import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/navbar/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
	title: "Airdnd",
	description: "Vacation Homes & Condo Rentals - Airdnd - Airbnb",
};

const nunito = Nunito({
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	
	return (
		<html lang="en">
			<body className={nunito.className}>
				<ClientOnly>
					<ToasterProvider />
					<RegisterModal />
					<LoginModal />
					<Navbar currentUser={currentUser}/>
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
