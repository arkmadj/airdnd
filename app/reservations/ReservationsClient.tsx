"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservations, SafeUser } from "../types";

interface ReservationsClientProps {
	reservations: SafeReservations[];
	currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
	reservations,
	currentUser,
}) => {
	return (
		<Container>
			<Heading title="Reservations" subtitle="Bookings on your properties" />
		</Container>
	);
};

export default ReservationsClient;
