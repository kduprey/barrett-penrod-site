import { localStorage } from "./webstorage";

const is24hLocalStorageKey = "timeOption.is24hClock";

export enum TimeFormat {
	TWELVE_HOUR = "h:mma",
	TWENTY_FOUR_HOUR = "HH:mm",
}

export const set24hClock = (is24hClock: boolean): void =>
	localStorage.setItem(is24hLocalStorageKey, is24hClock ? "true" : "false");

export const getIs24hClock = (): boolean | null => {
	const is24hClock = localStorage.getItem(is24hLocalStorageKey);

	if (is24hClock === null) return null;

	return is24hClock === "true";
};

export const getTimeFormatString = (
	timeFormat: number | null | undefined
): TimeFormat =>
	timeFormat === 24 ? TimeFormat.TWENTY_FOUR_HOUR : TimeFormat.TWELVE_HOUR;

export const isBrowserLocale24h = (): boolean => {
	const localStorageTimeFormat = getIs24hClock();
	// If time format is already stored in the browser then retrieve and return early
	if (localStorageTimeFormat === true) {
		return true;
	} else if (localStorageTimeFormat === false) {
		return false;
	}
	// Intl.DateTimeFormat with value=undefined uses local browser settings.
	if (
		/M/i.exec(new Intl.DateTimeFormat(undefined, { hour: "numeric" }).format(0))
	) {
		set24hClock(false);
		return false;
	}
	set24hClock(true);
	return true;
};

export const detectBrowserTimeFormat = isBrowserLocale24h()
	? TimeFormat.TWENTY_FOUR_HOUR
	: TimeFormat.TWELVE_HOUR;
