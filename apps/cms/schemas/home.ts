import { HomeIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
    name: "home",
    title: "Home Page",
    type: "document",
    icon: HomeIcon,
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
        }
    ],
});
