import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { DataPosts , SetData } from "../../Context";
import styled from "./Layout.module.scss";
import { useState } from "react";

export default function Layout() {

  const [isVisible , setIsVisible] = useState(false)
  const posts = useContext(DataPosts);
  const [массивСоответствий , установитьМассивСоответствий ] = useState([]);
  const data = useContext(SetData);
  const dataPosts = useContext(DataPosts)

  const postInfo = (event) => {
    установитьМассивСоответствий(posts.filter(post => post.title.match(new RegExp(event.target.value , 'gmi'))));

    if(массивСоответствий.length){
      setIsVisible(true);
    }
  }

  return (
    <>
      <header>
        <Link to="/">Lite</Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="">Questions & Anwers</Link>
            </li>
            <li>
              <input onChange={postInfo} type="text" />
              <div className={ isVisible ? styled.help__visible : styled.help} onClick={(event) => data({title: event.target.textContent , body: dataPosts.find(post => post.title === event.target.textContent).body.repeat(10)})}>{массивСоответствий.map(post => <Link key={post.id} to="/currentArticle">{post.title}</Link>)}</div>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <Link to="/">Lite</Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="">Questions & Anwers</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
