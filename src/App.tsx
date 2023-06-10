import { Builder, BuilderComponent, builder } from "@builder.io/react";
import "./App.css";
import "./component/Header/Header.builder";
import "./component/Hero/hero.builder";
import "./component/ourClient/ourClient";
import "./component/digitalProduct/digitalProduct.builder";
import "./component/footer/footer.builder";
import "./component/newsLetter/newsLetter.builder";
import "./component/clientReview/clientReview.builder";
import "./component/helpBusiness/helpBusiness.builder";

builder.init("57091de781984877860bde3d8f9eea52");

Builder.register("insertMenu", {
  name: "Custom component",
  items: [
    { name: "header" },
    { name: "hero" },
    { name: "our-client" },
    { name: "help-business" },
    { name: "digital-product" },
    { name: "client-review" },
    { name: "news-letter" },
    { name: "footer" },
  ],
});

export default function App() {
  return (
    <div className="mainWrapper">
      <BuilderComponent model="header" />
      <BuilderComponent model="hero" />
      <BuilderComponent model="our-client" />
      <BuilderComponent model="help-business" />
      <BuilderComponent model="digital-product" />
      <BuilderComponent model="client-review" />
      <BuilderComponent model="news-letter" />
      <BuilderComponent model="footer" />
    </div>
  );
}
