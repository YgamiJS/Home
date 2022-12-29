import { NavLink } from "react-router-dom";
import styled from "./Link.module.scss";


const NavigationLink = ({link , text , ...props}) => {
    return (
        <NavLink {...props} className={({isActive}) => isActive ? styled.active : ""} to={link}>{text}</NavLink>
    )
}

export default NavigationLink;