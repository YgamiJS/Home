import ArticlesParent from "./ArticlesParent";
import Pagination from "../Pagination/Pagination.jsx";
import styled from "./Articles.module.scss";
import Link from "../UI/Link/Link.jsx";
export default function Articles({ posts, setStateDataPost, setPosts }) {
    return (
        <div className={styled.Articles}>
            <Link to="/Home/newArticle" title="Create a Article" />
            <ArticlesParent posts={posts} setStateDataPost={setStateDataPost} />
            <Pagination
                posts={posts}
                setPosts={setPosts}
                settings={{
                    url: "https://jsonplaceholder.typicode.com/posts",
                    limit: 40,
                }}
            />
        </div>
    );
}
