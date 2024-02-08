import React from "react";
import hero from "./media/hero.png";

interface News {
  author: String;
  title: String;
  description: String;
  publishedAt: Date;
  url: URL;
  image: URL;
}

function HotTopics({ children }): JSX.Element {
  return <div>{children}</div>;
}

export default HotTopics;
