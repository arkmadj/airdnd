import { AirUser } from "@prisma/client";

export type SafeUser = Omit<
	AirUser,
	"createdAt" | "updatedAt" | "emailVerified"
> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
};
