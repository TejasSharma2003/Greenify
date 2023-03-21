import React from "react";
import styles from "./blog.module.css";
import Navbar from "../components/Navbar";
import Container from "../ui/Container";

import blogImage from "../assets/detailed-image.jpg";
import hank from "../assets/blog-author.jpg";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <section className={styles.blogPage}>
        <Container>
          <div className={styles.blog}>
            <img className={styles.blogImg} src={blogImage} alt="blog-img" />
          </div>
          <div className={styles.authorContainer}>
            <img className={styles.author} src={hank} alt="author" />
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',marginLeft:'10px'}}>
              <h5 className={styles.authorName}>Hank jeo</h5>
              <span className={styles.authorWork}>Drug Department</span>
            </div>
          </div>
          <div className={styles.paraContainer}>
          <p className={styles.para}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          
          
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
