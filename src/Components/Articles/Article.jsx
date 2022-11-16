import { useContext } from "react";
import { Link } from "react-router-dom";
import { SetData , DataPosts } from "../../Context";
import styled from "./Articles.module.scss";

export default function Article({ post }) {

  const data = useContext(SetData);
  const dataPosts = useContext(DataPosts)

  return <Link to="/currentArticle" onClick={(event) => data({title: event.target.textContent , body: dataPosts.find(post => post.title === event.target.textContent).body.repeat(10)})} className={styled.post}>{post.title}</Link>;
}
