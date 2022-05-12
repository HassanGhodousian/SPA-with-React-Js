import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardPost from "../../components/posts/Card";
const PostIndex = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h2>Post page</h2>
      <Link to="./create" className="btn btn-dark">
        Create Post
      </Link>
      {error && <h2 className="">{error}</h2>}
      {loading && <div className="spinner-border" role="status"></div>}
      {posts && <CardPost posts={posts} />}
    </>
  );
};

export default PostIndex;
