import { getElement } from "../../API/utils";

export default function Qa({stateQuestion , stateQuestions}){

    const queston = getElement(stateQuestions , stateQuestion);

    return (
        <div className="article">
            <h1>{queston?.name}</h1> 
            <div className="page">{queston?.body?.repeat(33)}.</div>
            <br />
            <h2>Ответы</h2>
            <br />
            <div className="page">{queston?.body.repeat(3)}.</div>
        </div>
    )
}