import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "InternalLinks",
        name: "internal_links",
        path: "src/content/internal-links",
        format: "json",
        fields: [
          {
            type: "string",
            name: "label",
            label: "Link label",
          },
          {
            type: "string",
            name: "url",
            label: "Link URL",
          },
          {
            type: "boolean",
            name: "external",
            label: "Open in new tab?",
          },
        ],
      },
      {
        label: "External Links",
        name: "external_links",
        path: "src/content/external-links",
        format: "json",
        fields: [
          {
            type: "string",
            name: "label",
            label: "Link label",
          },
          {
            type: "string",
            name: "url",
            label: "Link URL",
          },
          {
            type: "boolean",
            name: "external",
            label: "Open in new tab?",
          },
        ],
      },
      {
        label: "Globals",
        name: "globals",
        path: "src/content/globals",
        format: "json",
        fields: [
          {
            type: "rich-text",
            name: "footerContent",
            label: "Footer Text Content",
            isBody: true,
            toolbarOverride: ["bold", "italic", "link"],
          },
        ],
      },
      {
        label: "Under Construction",
        name: "underConstruction",
        path: "src/content/underConstruction",
        format: "json",
        fields: [
          {
            type: "string",
            name: "content",
            label: "under construction content",
          },
        ],
      },
    ],
  },
});
