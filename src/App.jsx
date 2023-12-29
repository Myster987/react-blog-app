import { useState, createContext } from "react";
import PostListPage from "./pages/PostListPage";

export const CurrentPage = createContext(<PostListPage />);

const App = () => {
  const [page, setPage] = useState(<PostListPage />);

  return <CurrentPage.Provider value={setPage}>{page}</CurrentPage.Provider>;
};

export default App;
