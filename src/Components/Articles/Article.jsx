import { Link } from "react-router-dom";
import styled from "./Articles.module.scss";

export default function Article({ post }) {

  return <Link to="/Home/currentArticle" id={post.id} className={styled.post}>{post.title}</Link>;
}
