import { useContext } from "react";
import { Data } from "../../Context.jsx";

export default function CurrentArticle(){

    let data = useContext(Data);

    return (
        <div>
            <div>{data.title}</div>
            <div>{data.body}</div>
        </div>
    )
}