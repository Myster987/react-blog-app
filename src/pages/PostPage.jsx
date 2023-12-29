import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CurrentPage } from "../App";
import { deletePost } from "../api/post-api";
import PostListPage from "./PostListPage";

const PostPage = ({ postData }) => {
  const setCurrentPage = useContext(CurrentPage);
  const client = useQueryClient();

  const mutationPosts = useMutation({
    mutationFn: (args) => {
      deletePost(args.id);
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  const handleClickBack = () => {
    setCurrentPage(<PostListPage />);
  };

  const handleDeletePost = () => {
    mutationPosts.mutate(postData);
    setCurrentPage(<PostListPage />);
  };

  return (
    <div className="post-page-wrapper">
      <button className="back-to-list-page" onClick={handleClickBack}>
        Back
      </button>

      <h1>{postData.title}</h1>

      <p>{postData.content}</p>

      <p>Created at: {postData.createdAt}</p>

      <button className="delete-post-btn" onClick={handleDeletePost}>
        Delete post
      </button>
    </div>
  );
};

export default PostPage;
