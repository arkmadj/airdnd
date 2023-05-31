"use client";

import { SafeListing, SafeUser } from "../types";

interface FavoriteClientProps {
	listings: SafeListing[];
	currentUser: SafeUser | null;
}

const FavoritesClient: React.FC<FavoriteClientProps> = ({
	listings,
	currentUser,
}) => {
	return <div>Favorites Client</div>;
};

export default FavoritesClient;
