import { Link } from "react-router-dom";
import List from "../List/List";
import Pagination from "../Pagination/Pagination"
import { getId } from "../../API/utils";
import styled from "./qa.module.scss";

export default function QuestionsAnwers ({stateQuestions ,  setStateQuestions , setStateQuestion}) {

    const setDataQuesion = (event) => setStateQuestion(getId(event));

    return (
        <div>
            <div onClick={setDataQuesion}>
                 {stateQuestions.map(question => <Link to="/Home/qa" id={question.id} key={question.id}>{question.name}</Link>)} 
           </div> 
            <Pagination posts={stateQuestions} setPosts={setStateQuestions} url="https://jsonplaceholder.typicode.com/comments" />
        </div>
    )

    // return (
    //     <div>
    //         <List items={stateQuestions} renderList={ (question) => <Link to="/Home/qa" id={question.id} key={question.id}>{question.name}</Link>} />
    //         <Pagination posts={stateQuestions} setPosts={setStateQuestions} url="https://jsonplaceholder.typicode.com/comments" />
    //     </div>
    // )

}