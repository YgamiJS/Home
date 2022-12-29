import { Link } from "react-router-dom";
import List from "../List/List";
import Pagination from "../Pagination/Pagination"
import { getId } from "../../API/utils";
import styled from "./qa.module.scss";
import { Card } from "../UI/Card/Card";

export default function QuestionsAnwers ({stateQuestions ,  setStateQuestions , setStateQuestion}) {

    const setDataQuesion = (event) => setStateQuestion(getId(event));

    return (
         <div>
             <List className={styled.posts} onClick={setDataQuesion} items={stateQuestions} renderList={ (question) => <Card to="/Home/qa" title={question.name} id={question.id} key={question.id} />} />
             <Pagination posts={stateQuestions} setPosts={setStateQuestions} url="https://jsonplaceholder.typicode.com/comments" />
         </div>
    )

}