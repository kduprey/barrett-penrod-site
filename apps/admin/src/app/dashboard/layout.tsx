import { PageWrapper } from "@/components";
import type { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
	return <PageWrapper>{children}</PageWrapper>;
};

export default layout;
