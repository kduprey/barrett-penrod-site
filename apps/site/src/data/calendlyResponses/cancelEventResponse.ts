import { CalendlyCancel } from "@bpvs/site/types/types";

export const cancelEventResponse: CalendlyCancel = {
  resource: {
    canceled_by: "string",
    reason: "string",
    canceler_type: "host",
  },
};
