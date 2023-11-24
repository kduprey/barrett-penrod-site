import type { PropsWithChildren } from "react";
import { PageWrapper } from "@/components";

const layout = ({ children }: PropsWithChildren) => {
	return <PageWrapper>{children}</PageWrapper>;
};

export default layout;
