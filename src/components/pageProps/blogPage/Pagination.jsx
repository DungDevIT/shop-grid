function Pagination({ onPageChange, currentPage, blogs, pageSize }) {
  const totalPage = Math.ceil(blogs.length / pageSize);
  //   console.log(totalPage);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => {
        return (
          <li
            className={
              pageNumber === currentPage ? "bg-[#0167F3] text-white" : ""
            }
            key={pageNumber}
          >
            <a
              className="inline-flex w-10 h-10 py-2 px-4 text-center border border-gray-300 items-center justify-center"
              href="#"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        );
      }
    );
  };
  return (
    <ul className="flex items-center justify-center my-8 flex-wrap gap-4">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      <div className="flex gap-1">{renderPaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
