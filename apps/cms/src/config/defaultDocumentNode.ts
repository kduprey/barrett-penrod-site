import { Iframe } from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType }
) => {
	switch (schemaType) {
		case `post`:
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url:
							process.env.VERCEL_ENV === "production"
								? "https://bpvs.kduprey.dev/api/preview"
								: `http://localhost:3000/api/preview`,
					})
					.title("Preview"),
			]);
		default:
			return S.document().views([S.view.form()]);
	}
};
