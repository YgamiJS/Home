import { useState, useEffect } from "react";
import { getPageCount, getPagesArray } from "../../API/utils";
import Servise from "../../API/LoadData";
import styled from "./Pagination.module.scss";

export default function Pagination({ posts, setPosts , url }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(20);

  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    let ignore = false;

    const fetchingPost = async () => {
      const response = await Servise.getAll(limit, page , url);   
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"]; 
      setTotalPages(getPageCount(totalCount, limit)); 
    };

    !ignore && fetchingPost();

    return () => {
      ignore = true;
    };
  }, [page]);

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className={styled.pagination}>
      {pagesArray.map((pageNumber) => (
        <button
          onClick={() => changePage(pageNumber)}
          key={pageNumber}
          className={page === pageNumber ? styled.paginationButton && styled.paginationButton__current : styled.paginationButton}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}