import React, { useState } from "react";

const BlogForm = (props) => {
  const { submitNewBlog } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleCreation = async (event) => {
    event.preventDefault();

    const newBlog = {
      title,
      author,
      url,
    };

    await submitNewBlog(newBlog);

    setAuthor("");
    setTitle("");
    setUrl("");
  };

  return (
    <div>
      <form onSubmit={handleCreation}>
        <h2>Create new blog</h2>
        <div>
          <div>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div>
            Author:
            <input
              type="text"
              name="author"
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </div>
          <div>
            URL:
            <input
              type="text"
              name="url"
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
