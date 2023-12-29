export const getAllPosts = async () => {
  return (
    JSON.parse({ ...localStorage }.posts) || [
      {
        id: 1,
        createdAt: new Date().toISOString().split("T")[0],
        title: "Lorem",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio neque, esse illo omnis sapiente rerum non facilis, corporis magni doloribus amet voluptas laudantium voluptate praesentium. Quos iste et unde?",
      },
    ]
  );
};

export const addNewPost = async (title, content) => {
  const postStorage = JSON.parse(localStorage.getItem("posts")) || [];
  const post = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString().split("T")[0],
    title,
    content,
  };

  postStorage.push(post);

  return localStorage.setItem("posts", JSON.stringify(postStorage));
};

export const deletePost = async (toDeleteId) => {
  const postStorage = JSON.parse(localStorage.getItem("posts")) || [];
  return localStorage.setItem(
    "posts",
    JSON.stringify(postStorage.filter((post) => post.id != toDeleteId))
  );
};
