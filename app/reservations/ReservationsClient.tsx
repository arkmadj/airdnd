"use client";

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservations, SafeUser } from "../types";
import { useState } from "react";

interface ReservationsClientProps {
	reservations: SafeReservations[];
	currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
	reservations,
	currentUser,
}) => {
  const router = useRouter();
  const [deletingId, seDeletingId] = useState('')
 
	return (
		<Container>
			<Heading title="Reservations" subtitle="Bookings on your properties" />
		</Container>
	);
};

export default ReservationsClient;
