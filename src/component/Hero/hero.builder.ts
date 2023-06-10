import { Builder } from "@builder.io/react";
import Hero from "./Hero";
import heroBannerImg from "../../img/heroBanner.png";

Builder.registerComponent(Hero, {
  name: "hero",
  inputs: [
    {
      type: "object",
      name: "hero",
      defaultValue: {
        title: "A Digital Product Agency",
        description:
          "Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.",
        buttonText: "Contact Now",
        heroBanner: heroBannerImg,
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
        {
          name: "buttonText",
          type: "string",
        },
        {
          name: "heroBanner",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          required: true,
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        }
      ],
    },
  ],
});
