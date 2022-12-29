import { Link , Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "./Layout.module.scss";
import { getId } from "../../API/utils";
import NavigationLink from "../UI/Link/Link.jsx";
import "../../App.scss"

export default function Layout({posts , setStateDataPost,  stateQuestions}) {

  const [isVisible , setIsVisible] = useState(false)

  const postsAndQuestions = [posts , stateQuestions];
  
  const [ArrMatches , setArrMatces] = useState([]);
  
  const postInfo = (event) => {

    const regexp = new RegExp(event.target.value , 'gi');

    setArrMatces(postsAndQuestions.flat().filter(post => post?.title?.match(regexp) || post?.name?.match(regexp)));

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
              {/* <NavigationLink className={({isActive}) => isActive ? styled.active : ""} to="/Home/">Home</NavigationLink> */}
              <NavigationLink link="/Home/" text="Home" />
            </li>
            <li>
              <NavigationLink link="/Home/articles" text="Articles" />
            </li>
            <li>
              <NavigationLink link="/Home/questions-anwers" text="Questions & Anwers" />
            </li>
            <li>
              <input onChange={postInfo} type="text" />
              <div className={ isVisible ? styled.help__visible : styled.help} onClick={(event) => {setStateDataPost(getId(event)); View()}}>{ArrMatches.map(post => <Link id={post.id} key={post.id} to="/Home/currentArticle">{post?.title || post?.name}</Link>)}</div>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main" onClick={View}>
        <Outlet />
      </div>
      <footer>
        <Link to="/Home/">Lite</Link>
        <nav>
        <ul>
        <li>
              {/* <NavigationLink className={({isActive}) => isActive ? styled.active : ""} to="/Home/">Home</NavigationLink> */}
              <NavigationLink link="/Home/" text="Home" />
            </li>
            <li>
              <NavigationLink link="/Home/articles" text="Articles" />
            </li>
            <li>
              <NavigationLink link="/Home/questions-anwers" text="Questions & Anwers" />
            </li>
        </ul>
        </nav>
      </footer>
    </>
  );
}
