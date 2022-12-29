import { Link } from "react-router-dom";
import styled from "./Card.module.scss";

const Card = ({to , title , ...props}) => {
    return (
        <Link {...props} className={styled.Card} to={to}>{title}</Link>
    )
}

export { Card };