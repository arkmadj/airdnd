"use client";

import { useEffect, useState } from "react";

interface CLientOnlyProps {
	children: React.ReactNode;
}

const ClientOnly: React.FC<CLientOnlyProps> = ({ children }) => {
	const [hasmounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasmounted) {
		return null;
	}

	return <>{children}</>;
};

export default ClientOnly;
