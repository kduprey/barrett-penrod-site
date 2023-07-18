import home from "@/schemas/home";
import siteSettings from "@/schemas/siteSettings";
import { CogIcon } from "@sanity/icons";
import {
    DocumentActionComponent,
    DocumentActionsContext,
    SchemaTypeDefinition,
    Template,
} from "sanity";
import { StructureBuilder } from "sanity/desk";

export const singleTypes: SchemaTypeDefinition[] = [
    siteSettings,
    home,
];

export const deskStructure = (S: StructureBuilder) =>
    S.list()
        .title("Content")
        .items([
            singletonListItem(S, home),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !singleTypes
                        .map((e) => e.title)
                        .includes(listItem.getTitle() as string)
            ),
            S.divider(),
            S.listItem()
                .title("Site Settings")
                .child(
                    S.document()
                        .schemaType("siteSettings")
                        .documentId("siteSettings")
                )
                .icon(CogIcon),
        ]);

const singletonListItem = (S: StructureBuilder, type: SchemaTypeDefinition) =>
    S.listItem()
        .title(type.title || type.name)
        .child(S.document().schemaType(type.name).documentId(type.name))
        .icon(type.icon);

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export const documentActions = (
    input: DocumentActionComponent[],
    context: DocumentActionsContext
) =>
    singleTypes.map((e) => e.name).includes(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input;

export const schemaTemplatesFilter = (templates: Template<any, any>[]) =>
    templates.filter(
        ({ schemaType }) => !singleTypes.map((e) => e.name).includes(schemaType)
    );
