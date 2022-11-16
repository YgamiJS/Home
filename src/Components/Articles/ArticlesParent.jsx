import Article from "./Article";
import styled from "./Articles.module.scss";

export default function ArticlesParent({ posts , ...props}) {
  return (
    <div className={styled.ArticleParent} {...props}>
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </div>
  );
}
