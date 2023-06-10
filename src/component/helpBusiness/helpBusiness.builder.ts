import { Builder } from "@builder.io/react";
import HelpBusiness from "./HelpBusiness";

Builder.registerComponent(HelpBusiness, {
  name: "help-business",
  inputs: [
    {
      type: "object",
      name: "needHelp",
      defaultValue: {
        title: "How can we help your Business ?",
        subTitle:
          "We build readymade websites, mobile applications, and elaborate online business services.",
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
    {
      type: "object",
      name: "businessIdea",
      defaultValue: {
        title: "Business Idea Planning",
        subTitle: "We present you a proposal and discuss niffty-gritty like",
      },
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "subTitle",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      name: "financialPlanningSystem",
      defaultValue: {
        title: "Financial Planning System",
        subTitle: "Protocols apart from aengage models, pricing billing",
      },
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "subTitle",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      name: "webDev",
      defaultValue: {
        title: "Development Website and App",
        subTitle: "Communication protocols apart from engagement models",
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
    {
      type: "object",
      name: "marketAnalysis",
      defaultValue: {
        title: "Market Analysis Project",
        subTitle: "Protocols apart from aengage models, pricing billing",
      },
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "subTitle",
          type: "string",
        },
      ],
    },
  ],
});
