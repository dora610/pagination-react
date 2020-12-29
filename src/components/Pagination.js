import React from "react";

function Pagination({ totalposts, postPerPage, pageToDisplay }) {
  const totalPages = totalposts / postPerPage;
  const pageList = [];

  for (let i = 0; i < totalPages; i++) {
    pageList.push(i + 1);
  }

  return (
    <div className="pagination justify-content-end mt-4 mb-5">
      {pageList.map((page) => (
        <div className="page-item" key={page}>
          <button className="page-link" onClick={() => pageToDisplay(page)}>
            {page}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
