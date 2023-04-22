import { PACKAGE_TYPES } from "@bpvs/packages/types/src";
import { z } from "zod";

export const PackageTypeEnum = z.enum(PACKAGE_TYPES);
