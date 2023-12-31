import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={6} //карточек на странице
      pageCount={14} //количество страниц
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
