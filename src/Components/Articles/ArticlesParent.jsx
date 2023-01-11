import Article from "./Article";
import List from "../List/List";
import styled from "./Articles.module.scss";
import { v4 as uuidv4 } from "uuid";
import { getId } from "../../API/utils";

export default function ArticlesParent({ posts, setStateDataPost, ...props }) {
    return (
        <List
            className={styled.ArticleParent}
            {...props}
            onClick={(event) => {
                if (event.target.classList.contains(styled.ArticleParent))
                    return;
                setStateDataPost(getId(event));
            }}
            items={posts}
            renderList={(post) => <Article key={uuidv4()} post={post} />}
        />
    );
}
