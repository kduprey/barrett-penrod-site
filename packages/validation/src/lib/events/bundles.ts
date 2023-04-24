import { PACKAGE_TYPES } from "@bpvs/types";
import { z } from "zod";

export const PackageTypeEnum = z.enum(PACKAGE_TYPES);
