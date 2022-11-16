import { useContext } from "react";
import { DataPosts , SetDataPosts} from "../../Context";
import ArticlesParent from "./ArticlesParent";
import Pagination from "../Pagination/Pagination.jsx";
import styled from "./Articles.module.scss";

export default function Articles() {

  const posts = useContext(DataPosts);
  const setPosts = useContext(SetDataPosts);

  const Page = (event) => {
    if(event.target.classList.contains(styled.ArticleParent)) return;
    console.log(event.target.textContent);
  }

  return (
      <div className={styled.Articles}>
        <ArticlesParent posts={posts} onClick={(e) => Page(e)} />
        <Pagination posts={posts} setPosts={setPosts} />
      </div>
  );
}
