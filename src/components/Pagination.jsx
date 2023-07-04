import "../styles/Pagination.scss";
import {usePagination} from "../hooks/usePagination";
import {useSelector} from "react-redux";

export default function Pagination({activePage, setActivePage}) {
  const payload = useSelector(state => state.movieStore);
  // console.log(payload);
  const page = {count: payload.count, limit: payload.limit};
  const {startPage, lastPage, onClickPage, onClickPrevPage, onClickNextPage} =
    usePagination({
      page,
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
