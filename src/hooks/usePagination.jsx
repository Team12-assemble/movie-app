import {useState} from "react";

export function usePagination({page, setActivePage}) {
  const [startPage, setStartPage] = useState(1);
  const lastPage =
    page.count !== null ? Math.ceil(Number(page.count) / page.limit) : 0;

  const onClickPage = event => {
    const activePage = Number(event.target.id);
    setActivePage(activePage);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivePage(startPage - 5);
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivePage(startPage + 5);
    }
  };

  return {
    startPage,
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
}
