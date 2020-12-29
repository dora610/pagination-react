import React from "react";

function Postlimit({ postLimiter }) {
  const postDefault = [6, 9, 12, 15];

  return (
    <>
      <div className="row justify-content-end mt-2">
        <div className="col-2 btn-group">
          {postDefault.map((p) => (
            <input
              type="button"
              value={p}
              key={p}
              className="btn btn-outline-primary"
              onClick={() => postLimiter(p)}
            />
          ))}
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-3">
          <p>Show post per page:</p>
        </div>
      </div>
    </>
  );
}

export default Postlimit;
