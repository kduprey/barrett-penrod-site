import { CalendlyCancel } from "@bpvs/types";

export const cancelEventResponse: CalendlyCancel = {
  resource: {
    canceled_by: "string",
    reason: "string",
    canceler_type: "host",
  },
};
