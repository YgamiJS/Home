import { Card } from "../UI/Card/Card";
export default function Article({ post }) {
    return <Card to="/Home/currentArticle" title={post.title} id={post.id} />;
}
