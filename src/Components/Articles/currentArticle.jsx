import { getElement } from "../../API/utils.jsx";

export default function CurrentArticle({posts ,  stateDataPost}){

    const elem = getElement(posts , stateDataPost);

    return (
        <div>
            {elem?.title}
            {elem?.body}
        </div>
    )
}