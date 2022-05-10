import { useEffect, useState } from "react";
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
      <div className="container  mt-5">
        <div className="row g-3">
          <h2>User page</h2>
          {error && <h2 className="">{error}</h2>}
          {loading && <div className="spinner-border" role="status"></div>}
          {posts && <CardPost posts={posts} />}
        </div>
      </div>
    </>
  );
};

export default PostIndex;
