"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
	const user = useUser();
	const router = useRouter();

	useEffect(() => {
		if (user.isSignedIn) router.push("/dashboard");
		router.push("/login");
	}, [user, router]);
};

export default Page;
