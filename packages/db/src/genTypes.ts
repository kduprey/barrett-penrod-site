import { compile } from "json-schema-to-typescript";
import fs from "node:fs";

const transformer = async () => {
	// get generated json-schema from ./prisma/json-schema/json-schema.json
	const data = await compile(
		JSON.parse(
			fs.readFileSync("./prisma/json-schema/json-schema.json", "utf-8")
		),
		"PrismaClient"
	);

	// save data to ../../libs/types/src/lib/db/prisma-client.ts
	fs.writeFileSync(
		"../../libs/types/src/lib/db/prisma-client.ts",
		data,
		"utf-8"
	);
};
