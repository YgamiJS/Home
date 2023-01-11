import { Link as RouterLink } from "react-router-dom";
import styled from "./Link.module.scss";

const Link = ({ title, to, ...props }) => {
    return (
        <RouterLink className={styled.link} {...props} to={to}>
            {title}
        </RouterLink>
    );
};

export default Link;
