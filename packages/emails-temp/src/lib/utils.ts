import { FormattedBookingDate } from "@bpvs/types";

export const formatBookingDate = (
  bookingDate: Date,
  timeZone: string | null,
): FormattedBookingDate => ({
  bookingTime: bookingDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timeZone ?? "America/New_York",
  }),
  bookingDate: bookingDate.toLocaleDateString([], {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: timeZone ?? "America/New_York",
  }),
});
