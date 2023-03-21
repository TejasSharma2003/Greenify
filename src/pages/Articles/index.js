import { useState } from "react";
import "./index.scss";
import Layout from "../../ui/layout";

import { data } from "../../components/Blogs/Blogs-data";
import Blog from "../../components/Blogs/blog";
import Button from "../../components/Button";
import Container from "../../ui/Container";

const Articles = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [input, setInput] = useState('');
  const content = data.map((item) => {
    return (
      <Blog
        key={item.id}
        category={item.category}
        blogImage={item.blogImage}
        title={item.title}
        authorImage={item.authorImage}
        authorName={item.authorName}
      />
    );
  });

  const comment = "Write your own post Bitch!";

  const onInputHandler = (e) => {
    console.log(input);
    setInput(e.currentTarget.textContent);

    setIsTouched(true);
  };

  const onClickHandler = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/article/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input })
      });
      console.log(res);
    } catch (err) {
      console.log(err)
    }


  }



  return (
    <Layout>
      <Container>
        <div className="article__container">
          <div
            className={`article__box ${!isTouched ? "article--fade" : ""}`}
            onInput={onInputHandler}
            contentEditable="true"
          >
            {!isTouched && comment}
          </div>
          <Button onClick={onClickHandler} className="article__button">Post</Button>
        </div>
        {content}
      </Container>
    </Layout>
  );
};

export default Articles;
