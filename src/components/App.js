import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList"
import About from "./About"
// import Article from "./Article"
console.log(blogData);

function App() {
  const title = "Overreacted"
  const aboutText = "This is the about text for the blog.";
  const posts = [
    { id: 1, title: "The Wet Codebase", body: "Come waste your time with me." },
    {
      id: 2,
      title: "Goodbye, Clean Code",
      body: "Let clean code guide you. Then let it go.",
    },
    { id: 3, title: "My Decade in Review", body: "A person reflection." },
  ];

  return (
    <div className="App">
      <Header title={title} />
      <About
        imageSrc="https://example.com/image.jpg"
        alt="Blog logo"
        text={aboutText}
      />
       <ArticleList posts={posts} />
    </div>
  );
}

export default App;
