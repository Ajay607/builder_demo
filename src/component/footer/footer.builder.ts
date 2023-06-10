import { Builder } from "@builder.io/react";
import Footer from "./Footer";

Builder.registerComponent(Footer, {
  name: "footer",
  inputs: [
    {
      type: "object",
      name: "footerDescription",
      defaultValue: {
        description:
          "Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.",
      },
      subFields: [
        {
          name: "description",
          type: "string",
        },
      ],
    },
    {
      type: "list",
      name: "WhatWeDo",
      defaultValue: [
        {
          label: "Web Design",
        },
        {
          label: "App Design",
        },
        {
          label: "Social Media Manage",
        },
        {
          label: "Market Analyse Project",
        },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
        },
      ],
    },
    {
      type: "list",
      name: "Company",
      defaultValue: [
        {
          label: "About Us",
        },
        {
          label: "Career",
        },
        {
          label: "Become Investor",
        },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
        },
      ],
    },
    {
      type: "list",
      name: "Support",
      defaultValue: [
        {
          label: "FAQ",
        },
        {
          label: "Policy",
        },
        {
          label: "Business",
        },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
        },
      ],
    },
    {
      type: "list",
      name: "Contact",
      defaultValue: [
        {
          label: "Whatsapp",
        },
        {
          label: "Support 24",
        },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
        },
      ],
    },
  ],
});
