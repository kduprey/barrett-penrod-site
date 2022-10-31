import { NextApiRequest, NextApiResponse } from "next";

/**
 * This is a helper function to check if the request method is valid.
 * If it is not, it will return a 405 error.
 * @param reqMethod - The request method to check against
 * @param req - The request object
 * @param res - The response object
 * @returns The response object if the method is invalid, otherwise undefined
 * @example
 * invalidMethod("POST", req, res);
 */
const invalidMethod = (
	reqMethod: "GET" | "POST" | "PUT" | "DELETE",
	req: NextApiRequest,
	res: NextApiResponse
) => {
	if (req.method !== reqMethod)
		return res
			.setHeader("Allow", reqMethod)
			.status(405)
			.end(`Method Type ${reqMethod} Not Allowed`);
};

export { invalidMethod };
