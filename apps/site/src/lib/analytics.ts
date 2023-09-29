export const pageview = (url: URL) => {
	// eslint-disable-next-line -- TODO: Remove Google Analytics
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call -- TODO: Remove Google Analytics
	window.gtag("config", "G-KFM4XGBGYY", {
		page_path: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface EventProps {
	action: string;
	category?: string;
	label?: string;
	value?: number;
}

export const event = ({ action, category, label, value }: EventProps) => {
	if (typeof window !== "undefined") {
		// eslint-disable-next-line -- TODO: Remove Google Analytics
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call -- TODO: Remove Google Analytics
		window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value,
		});
	}
};
