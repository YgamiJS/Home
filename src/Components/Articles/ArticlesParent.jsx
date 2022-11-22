import Article from "./Article";
import styled from "./Articles.module.scss";
import { getId } from "../../API/utils";


export default function ArticlesParent({ posts , setStateDataPost , ...props}) {

  return (
    <div className={styled.ArticleParent} {...props} onClick={(event) => {if(event.target.classList.contains(styled.ArticleParent)) return; setStateDataPost(getId(event))}}>
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </div>
  );
}
