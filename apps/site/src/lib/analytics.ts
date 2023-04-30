export const pageview = (url: URL) => {
	// @ts-expect-error - gtag is not defined
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	window.gtag("config", "G-KFM4XGBGYY", {
		page_path: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type Props = {
	action: string;
	category?: string;
	label?: string;
	value?: number;
};

export const event = ({ action, category, label, value }: Props) => {
	if (typeof window !== "undefined") {
		// @ts-expect-error - gtag is not defined
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};
