import { z } from "zod";

export const PACKAGE_TYPES = [
	"4 Session Package",
	"6 Session Package",
	"8 Session Package",
	"12 Session Package",
] as const;

export const PackageTypeEnum = z.enum(PACKAGE_TYPES);

export type PackageType = z.infer<typeof PackageTypeEnum>;
