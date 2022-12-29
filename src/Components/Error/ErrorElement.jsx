import { useRouteError } from "react-router-dom";
import styled from "./ErrorElement.module.scss";

const ErrorElement = () => {
    const error = useRouteError();
    
    return (
        <div className={styled.errorElement}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {error?.statusText || error?.message}
        </div>
    )
}

export default ErrorElement;