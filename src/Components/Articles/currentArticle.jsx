import { getElement } from "../../API/utils.jsx";

export default function CurrentArticle({ posts, stateDataPost }) {
    const elem = getElement(posts, stateDataPost);

    return (
        <div className="article">
            <h1>{elem?.title + "."}</h1>
            <br />
            <div className="page">{elem?.body?.repeat(99) + "."}</div>
        </div>
    );
}
