import { Builder } from "@builder.io/react";
import { Header } from "./Header";

Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      type: "list",
      name: "NavList",
      defaultValue: [
        {
          label: "Home",
        },
        {
          label: "What We Do",
        },
        {
          label: "Service",
        },
        {
          label: "Project",
        },
        {
          label: "Blog",
        },
        {
          label: "Contact",
        },
      ],
      subFields: [
        {
          name: "label",
          type: 'string',
        },
      ],
    },
  ],
});
