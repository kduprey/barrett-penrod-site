const updateQRDR = async (qrID: string) => {
	console.log("Updating QRDB");

	const date = new Date();
};

export { updateQRDR };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { query } = req;

	if (query.qr) {
		updateQRDR();
	}

	res.status(200).json({ name: "John Doe" });
};

export default handler;
