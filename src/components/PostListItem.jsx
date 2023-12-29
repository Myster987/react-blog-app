import { useContext } from "react";
import { CurrentPage } from "../App";
import PostPage from "../pages/PostPage";

const PostListItem = ({ postData }) => {
  const setCurrentPage = useContext(CurrentPage);

  const handleClick = () => {
    setCurrentPage(<PostPage postData={postData} />);
  };

  return (
    <li>
      <button className="post-list-item-btn" onClick={handleClick}>
        <h2>{postData.title}</h2>

        <p>{postData.content}</p>
      </button>
    </li>
  );
};

export default PostListItem;
