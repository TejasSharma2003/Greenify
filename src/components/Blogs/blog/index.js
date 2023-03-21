import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

import blog from "../../../assets/blog-2.jpg";
import blogAuthor from "../../../assets/blog-author.jpg";
const Blog = (props) => {
  return (

    <div className="blog">
      <div className="blog__image-container">
        <img className="blog__image" src={props.blogImage} alt="blog-1" />
      </div>
      <div className="blog__content">
        <span className="blog__cat">{props.category}</span>
        <h3 className="blog__title">{props.title}</h3>
        <p style={{fontSize:'1rem'}}>The dexterity you define while learning with me gonna make you richer.</p>
        <div className="blog__author-container">
          <img
            className="blog__author"
            src={props.authorImage}
            alt="author"
          />
          <h5 className="blog__author-name">{props.authorName}</h5>
        </div>
      </div>
    </div>
  );
};

export default Blog;
