import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeletePost from "../../components/posts/Delete";
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
      {error && <h2 className="">{error}</h2>}
      {loading && <div className="spinner-border" role="status"></div>}
      {post && (
        <div className="col-md-4 ">
          <div className="card">
            <div className="card-header fw-bold">{post.title}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{post.body}</li>
            </ul>
            <div>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-dark m-2">
                Edit
              </Link>
              <DeletePost />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default showPost;
