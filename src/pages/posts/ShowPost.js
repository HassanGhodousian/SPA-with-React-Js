import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function showPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [postId]);
  return (
    <>
      <div className="container  mt-5">
        <div className="row g-3">
          <h2>post page</h2>
          {error && <h2 className="">{error}</h2>}
          {loading && <div className="spinner-border" role="status"></div>}
          {post && (
            <div className="col-md-4 ">
              <div className="card">
                <div className="card-header fw-bold">{post.titel}</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{post.body}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default showPost;
