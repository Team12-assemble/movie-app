import "../styles/Pagination.scss";
import {usePagination} from "../hooks/usePagination";

export default function Pagination({page, activePage, setActivePage}) {
  const {startPage, lastPage, onClickPage, onClickPrevPage, onClickNextPage} =
    usePagination({
      page,
      activePage,
      setActivePage,
    });

  return (
    <section className="pagination">
      <button onClick={onClickPrevPage}>&lt;&lt;</button>
      <ul>
        {new Array(5).fill(1).map((_, i) => {
          return (
            i + startPage <= lastPage && (
              <li
                onClick={onClickPage}
                key={i + startPage}
                id={String(startPage + i)}
                style={{
                  borderBottom: startPage + i === activePage && "2px solid red",
                }}
              >
                {i + startPage}
              </li>
            )
          );
        })}
      </ul>
      <button onClick={onClickNextPage}>&gt;&gt;</button>
    </section>
  );
}
