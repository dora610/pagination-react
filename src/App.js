import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Postlimit from "./components/Postlimit";

function App() {
  const [postlist, setPostlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postPerPage, setPostPerPage] = useState(6);
  const [displayPage, setDisplayPage] = useState(1);

  const url = "https://jsonplaceholder.typicode.com/posts";

  let maxPostIndex = postPerPage * displayPage;
  let minPostIndex = maxPostIndex - postPerPage;

  useEffect(() => {
    const fetchpost = async () => {
      try {
        setIsLoading(true);
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
      <Postlimit postLimiter={(p) => setPostPerPage(p)} />
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
