import { Builder } from "@builder.io/react";
import ClientReview from "./ClientReview";

Builder.registerComponent(ClientReview, {
  name: "client-review",
  inputs: [
    {
      type: "list",
      name: "sliderList",
      defaultValue: [
        {
          name: "Matthew Paul",
          review:
            "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
        },
      ],
      subFields: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "review",
          type: "string",
        },
      ],
    },
  ],
});
