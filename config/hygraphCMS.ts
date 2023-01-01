import { GraphQLClient } from "graphql-request";

const hygraphcms: GraphQLClient = new GraphQLClient(
	"https://api-us-east-1.hygraph.com/v2/cl7ep7a6t60k301ul5b4o8j9h/master",
	{
		headers: {
			Authorization: `Bearer ${process.env["HYGRAPH_API_KEY"]}`,
		},
	}
);

export { hygraphcms };
