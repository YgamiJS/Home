import { useEffect, useState } from "react";
import Servise from "../API/LoadData";
import { getPagesArray } from "../API/utils";

const useFecth = (url) => {
    const [state , setState] = useState([]);

    useEffect(() => {
        let ignore = false;
    
        const fetchingPost = async () => {
          const response = await Servise.getAll(0 , 1 , url);
          setState(response.data);
        };
    
        !ignore && fetchingPost();
    
        return () => {
          ignore = true;
        };
    }, []);

    return [state , setState];
}

export default useFecth;