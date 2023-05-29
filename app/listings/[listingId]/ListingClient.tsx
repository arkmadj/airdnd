'use client'

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import { catergories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";

interface ListingClientProps {
	reservations?: Reservation[];
	lisitng: SafeListing & {
		user: SafeUser;
	};
	currentUser?: SafeUser | null;
}

const ListingCLient: React.FC<ListingClientProps> = ({
	reservations,
	lisitng,
	currentUser,
}) => {
	const category = useMemo(() => {
		return catergories.find((item) => item.label === lisitng.category);
	}, [lisitng.category]);
	return (
		<Container>
			<div className="max-w-screen-lg mx-auto">
				<div className="flex flex-col gap-6">
					<ListingHead
						title={lisitng.title}
						imageSrc={lisitng.imageSrc}
						locationValue={lisitng.locationValue}
						id={lisitng.id}
            currentUser={currentUser}
					/>
				</div>
			</div>
		</Container>
	);
};

export default ListingCLient;
