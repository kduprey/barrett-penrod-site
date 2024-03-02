import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
    api: {
        projectId: "n8emrwer",
    },
    graphql: [
        {
            id: "production",
            workspace: "production",
        },
        {
            id: "staging",
            workspace: "staging",
        },
    ],
});
