import { SESSION_LOCATIONS, SESSION_TYPES } from "@bpvs/types";
import { z } from "zod";

export const SessionLocationEnum = z.enum(SESSION_LOCATIONS);
export const SessionTypeEnum = z.enum(SESSION_TYPES);
