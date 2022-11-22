import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "./Layout.module.scss";
import { getId } from "../../API/utils";

export default function Layout({posts , setStateDataPost,  stateQuestions}) {
//поиск работает что то  с appp fetchData
  const [isVisible , setIsVisible] = useState(false)

  const postsAndQuestions = [posts , stateQuestions];
  const [массивСоответствий , установитьМассивСоответствий ] = useState([]);
  
  const postInfo = (event) => {

    установитьМассивСоответствий(postsAndQuestions.flat().filter(post => post?.title?.match(new RegExp(event.target.value , 'gmi') || post?.name?.match(new RegExp(event.target.value , 'gmi')))));

    массивСоответствий.length && setIsVisible(true);
  }

  const View = (event) => !event.relatedTarget.closest("li") && setIsVisible(false); 

  return (
    <>
      <header>
        <Link to="/Home/">Lite</Link>
        <nav>
          <ul>
            <li>
              <Link to="/Home/">Home</Link>
            </li>
            <li>
              <Link to="/Home/articles">Articles</Link>
            </li>
            <li>
              <Link to="/Home/questions-anwers">Questions & Anwers</Link>
            </li>
            <li onPointerOut={View}>
              <input onChange={postInfo} type="text" />
              <div className={ isVisible ? styled.help__visible : styled.help} onClick={(event) => setStateDataPost(getId(event))}>{массивСоответствий.map(post => <Link id={post.id} key={post.id} to="/Home/currentArticle">{post.title}</Link>)}</div>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <Link to="/Home/">Lite</Link>
        <nav>
          <ul>
            <li>
              <Link to="/Home/">Home</Link>
            </li>
            <li>
              <Link to="/Home/articles">Articles</Link>
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
