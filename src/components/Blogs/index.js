import React from "react";
import "./index.scss";
import Container from "../../ui/Container";

import Blog from "./blog";
import Heading from "../Heading";

import { data } from "./Blogs-data";

const Blogs = () => {
  const content = data.map((item) => {
    return (
      <Blog
        key={item.id}
        id={item.id}
        category={item.category}
        blogImage={item.blogImage}
        title={item.title}
        authorImage={item.authorImage}
        authorName={item.authorName}
      />
    );
  });

  return (
    <section className="blogs section-gap">
      <Heading className="">Research Articles.</Heading>
      <Container>
        <div className="blogs__content">
          <div className="blogs__container">{content}</div>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
