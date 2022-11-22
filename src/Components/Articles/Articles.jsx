import ArticlesParent from "./ArticlesParent";
import Pagination from "../Pagination/Pagination.jsx";
import styled from "./Articles.module.scss";

export default function Articles({posts  ,  setStateDataPost , setPosts}) {
  return (
      <div className={styled.Articles}>
        <ArticlesParent posts={posts}  setStateDataPost={ setStateDataPost}/>
        <Pagination posts={posts} setPosts={setPosts} url="https://jsonplaceholder.typicode.com/posts"/>
      </div>
  );
}
