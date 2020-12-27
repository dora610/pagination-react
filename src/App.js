import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [postlist, setPostlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postPerPage, setPostPerPage] = useState(5);
  const [displayPage, setDisplayPage] = useState(1);
  // const [pageToDisplay, setPageToDisplay] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  let maxPostIndex = postPerPage * displayPage;
  let minPostIndex = maxPostIndex - postPerPage;

  // console.log(postlist);
  // setPostDisplay(postlist.slice(minPostIndex, maxPostIndex));

  useEffect(() => {
    const fetchpost = async () => {
      try {
        setIsLoading(true);
        // {data: d}=axios
        const { data } = await axios.get(url);
        setPostlist(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchpost();
  }, []);

  return isLoading ? (
    <div className="container mt-auto">Loading...</div>
  ) : (
    <div className="container">
      <div className="justify-content-evenly my-3">
        <span>Select post per page:</span>
        <div className="btn-group">
          <input
            type="button"
            value="5"
            className="btn btn-outline-primary"
            onClick={() => setPostPerPage(5)}
          />
          <input
            type="button"
            value="10"
            className="btn btn-outline-primary"
            onClick={() => setPostPerPage(10)}
          />
          <input
            type="button"
            value="15"
            className="btn btn-outline-primary"
            onClick={() => setPostPerPage(15)}
          />
        </div>
      </div>
      <h3>Posts: </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 border border-info my-2 pb-4">
        {postlist.slice(minPostIndex, maxPostIndex).map((post) => (
          <div className="col" key={post.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalposts={postlist.length}
        postPerPage={postPerPage}
        pageToDisplay={(page) => setDisplayPage(page)}
      />
    </div>
  );
}

export default App;
