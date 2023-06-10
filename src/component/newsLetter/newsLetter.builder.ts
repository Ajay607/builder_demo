import { Builder } from "@builder.io/react";
import NewsLetter from "./NewsLetter";

Builder.registerComponent(NewsLetter, {
  name: "news-letter",
  inputs: [
    {
      type: "object",
      name: "newsLetter",
      defaultValue: {
        title: "Great Digital Product Agency since 2016 ",
        subTitle:
          "Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.",
      },
      subFields: [
        {
          name: "title",
          type: "richText",
        },
        {
          name: "subTitle",
          type: "richText",
        },
      ],
    },
  ],
});
