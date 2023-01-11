import { Link, Form } from "react-router-dom";
import { useState } from "react";
import styled from "./NewPost.module.scss";

const New = ({ settings }) => {
    const [dataPost, setDataPost] = useState(settings.objectPost);

    const func = () => {
        fetch(settings.urlFetch, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(dataPost),
        })
            .then((response) => response.json())
            .then((json) => settings.setData([json, ...settings.data]));
    };

    const setData = (event) => {
        setDataPost({
            ...dataPost,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Form className={styled.form} action="#" method="post">
            <input
                minLength={1}
                maxLength={40}
                name={settings.inputsName.title}
                value={dataPost.title}
                onChange={setData}
            />
            <textarea
                minLength={1}
                maxLength={200}
                name={settings.inputsName.body}
                value={dataPost.body}
                onChange={setData}
            />
            <Link to={"/Home/" + settings.urlLink} onClick={func}>
                Add
            </Link>
        </Form>
    );
};

export default New;
