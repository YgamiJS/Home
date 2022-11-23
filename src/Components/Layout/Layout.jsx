import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "./Layout.module.scss";
import { getId } from "../../API/utils";

export default function Layout({posts , setStateDataPost,  stateQuestions}) {

  const [isVisible , setIsVisible] = useState(false)

  const postsAndQuestions = [posts , stateQuestions];
  const [ArrMatches , setArrMatces] = useState([]);
  
  const postInfo = (event) => {

    setArrMatces(postsAndQuestions.flat().filter(post => post?.title?.match(new RegExp(event.target.value , 'gmi') || post?.name?.match(new RegExp(event.target.value , 'gmi')))));

    ArrMatches.length && setIsVisible(true);
  }

  const View = () => setIsVisible(false);

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
            <li>
              <input onChange={postInfo} type="text" />
              <div className={ isVisible ? styled.help__visible : styled.help} onClick={(event) => setStateDataPost(getId(event))}>{ArrMatches.map(post => <Link id={post.id} key={post.id} to="/Home/currentArticle">{post?.title || post?.name}</Link>)}</div>
            </li>
          </ul>
        </nav>
      </header>
      <div onClick={View}>
        <Outlet />
      </div>
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
