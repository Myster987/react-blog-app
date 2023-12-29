import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../api/post-api";
import { CurrentPage } from "../App";
import PostListItem from "../components/PostListItem";
import CreatePostPage from "./CreatePostPage";

const PostListPage = () => {
  const setCurrentPage = useContext(CurrentPage);

  const queryPosts = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  if (queryPosts.isLoading) {
    return <h1>Loading...</h1>;
  }

  const POSTS = queryPosts.data;

  return (
    <div className="post-list-page-wrapper">
      <header>
        <h1>Posts</h1>

        <button onClick={() => setCurrentPage(<CreatePostPage />)}>
          New post
        </button>
      </header>

      <main>
        <ul>
          {POSTS.map((post) => (
            <PostListItem key={post.id} postData={post} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default PostListPage;
