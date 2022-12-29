import { getElement } from "../../API/utils";

export default function Qa({stateQuestion , stateQuestions}){

    const queston = getElement(stateQuestions , stateQuestion);

    return (
        <div>
            {queston?.name} 
            {queston?.body}
            <br />
            Ответы
            <br />
            {queston?.body.repeat(3)}
        </div>
    )
}