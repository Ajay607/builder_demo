import { Builder } from "@builder.io/react";
import OurClient from "./OurClient";

Builder.registerComponent(OurClient, {
  name: "our-client",
  inputs: [
    {
      type: "object",
      name: "heros",
      defaultValue: {
        title: "Our Client",
        description:
          "Several selected clients, who already believe in our service.",
      },
      subFields: [
        {
          name: "title",
          type: "richText",
        },
        {
          name: "description",
          type: "richText",
        },
      ],
    },
  ],
});
