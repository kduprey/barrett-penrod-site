declare global {
	type Window = {
		gtag: (...args: any[]) => void;
	};
}
