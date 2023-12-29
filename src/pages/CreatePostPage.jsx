import { useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { addNewPost } from "../api/post-api";
import { CurrentPage } from "../App";
import PostListPage from "./PostListPage";

const CreatePostPage = () => {
  const setCurrentPage = useContext(CurrentPage);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  const createPostMutation = useMutation({
    mutationFn: (args) => {
      addNewPost(args.title, args.content);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({ title: currentTitle, content: currentContent });
  };

  const redirectToPostListPage = () => {
    setCurrentPage(<PostListPage />);
  };

  if (createPostMutation.isError) {
    return (
      <>
        <h1>{createPostMutation.error.message}</h1>
        <button onClick={redirectToPostListPage}>Back</button>
      </>
    );
  }

  if (createPostMutation.isSuccess) {
    return (
      <>
        <h1>Post created</h1>
        <button onClick={redirectToPostListPage}>Back</button>
      </>
    );
  }

  return (
    <div className="create-post-page-wrapper">
      <button className="back-to-list-page" onClick={redirectToPostListPage}>
        Back
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          placeholder="Title..."
          required
        />
        <textarea
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Content..."
          required
        ></textarea>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
