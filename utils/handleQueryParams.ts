import { ParsedUrlQuery } from "querystring";

const handleQueryParams = (query: ParsedUrlQuery) => {
	if (!query) {
		return null;
	}

	if (query.qr) {
		handleQrCode(query.qr);
	}
};

export default handleQueryParams;

const handleQrCode = (qr: string | string[]) => {};
