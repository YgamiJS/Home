import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import useFecth from "./hook/useFecth";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Articles from "./Components/Articles/Articles";
import CurrentArticle from "./Components/Articles/currentArticle";
import QuestionsAnwers from "./Components/Q&A/QuestionsAnwers";
import "./App.module.scss";
import Qa from "./Components/Q&A/qa";

function App() {
  const [stateDataPost, setStateDataPost] = useState(""); // key
  const [stateQuestion, setStateQuestion] = useState("");

  const [posts, setPosts] = useFecth("https://jsonplaceholder.typicode.com/posts");
  const [stateQuestions, setStateQuestions] = useFecth("https://jsonplaceholder.typicode.com/comments");

  return (
    <Routes>
      <Route path="/Home/" element={<Layout posts={posts} setStateDataPost={setStateDataPost} stateQuestions={stateQuestions}/>}>
        <Route
          index
          element={
            <Home
              textH1={"Добро пожаловать в Lite!"}
              textPage={
                "Home - Сайт вопросов - ответов , а также статей и много другого. Здесь вы сможите задать интересующий вас вопрос и тут же получить ответ на него , также вы можете читать написанные статьи на интересующие вас темы и писать свои."
              }
            ></Home>
          }
        ></Route>
        <Route path="/Home/articles" element={<Articles posts={posts} setPosts={setPosts}  setStateDataPost={ setStateDataPost}/>}></Route>
        <Route path="/Home/currentArticle" element={<CurrentArticle posts={posts} stateDataPost={stateDataPost} />}></Route> //
        <Route
          path="/Home/questions-anwers" 
          element={<QuestionsAnwers  stateQuestions={stateQuestions} setStateQuestions={setStateQuestions} setStateQuestion={setStateQuestion}/>}
        ></Route>
        <Route path="/Home/qa" element={<Qa stateQuestion={stateQuestion} stateQuestions={stateQuestions}/>}></Route>
        <Route path="/Home/*" element={<div>not found :(</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
